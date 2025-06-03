const { Op, where } = require("sequelize");
const { User, Student } = require("../config/sequelize.config");

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, role, email, className, age } = req.body;

    const isExist = await User.findOne({ where: { email } });
    if (isExist) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const newUser = await User.create({ name, role, email });
    if (role === "student") {
      await Student.create({
        userId: newUser.id,
        age,
        class: className,
      });
    }

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// List Users
exports.listUser = async (req, res) => {
  try {
    console.log(req.query, " req.query; req.query;");
    let {
      pagination = false,
      sortField = "createdAt",
      sortOrder = "ASC",
      search = "",
      page = 1,
      limit = 10,
      role,
    } = req.query;

    page = parseInt(page);

    limit = parseInt(limit);

    const offset = (page - 1) * limit;

    const whereClause = {};

    if (role) {
      whereClause["role"] = role;
    }

    const searchObj = {
      [Op.or]: [
        { name: { [Op.iLike]: `%${search}%` } },
        { email: { [Op.iLike]: `%${search}%` } },
      ],
    };

    const [rows, { count }] = await Promise.all([
      User.findAll({
        where: { ...searchObj, ...whereClause },
        include: { model: Student, as: "student" },
        order: [[sortField, sortOrder]],
        limit,
        offset,
      }),
      User.findAndCountAll({
        where: { ...searchObj, ...whereClause },
      }),
    ]);

    const totalDocumentCount = Math.ceil(count / limit);

    res.status(200).json({
      success: true,
      message: "Student list fetched successfully",
      data: { rows, totalDocumentCount, page },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const { name, role, email, className, age, id } = req.body;
    const updateUser = await User.findByPk(id);
    const updateStudent = await Student.findOne({
      where: { userId: updateUser?.id },
    });

    updateUser.name = name;
    updateStudent.class = className;
    updateStudent.age = age;
    await updateUser.save();
    await updateStudent.save();

    const result = { ...updateUser.toJSON(), ...updateStudent.toJSON() };

    res.status(200).json({
      success: true,
      message: "User update successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const deleteUser = await User.destroy({ where: { id: userId } });

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deleteUser.toJSON(),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
