const { Op } = require("sequelize");
const { User, Student } = require("../config/sequelize.config");

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
    console.log("aaaaaaaaaaaaaaaaaaa");

    const whereClause = {};

    if (role) {
      whereClause["role"] = role;
    }
    console.log("aaaaaaaaaaaaaaaaaaa");

    const searchObj = {
      [Op.or]: [
        { name: { [Op.iLike]: `%${search}%` } },
        { email: { [Op.iLike]: `%${search}%` } },
      ],
    };
    console.log("aaaaaaaaaaaaaaaaaaaaaaaassssssssssssssss");

    console.log("wqqwwf", {
      where: { ...searchObj, ...whereClause },
      order: [sortField, sortOrder],
      limit,
      offset,
    });

    const { count, rows } = await User.findAndCountAll({
      where: { ...searchObj, ...whereClause },
      order: [[sortField, sortOrder]],
      limit,
      offset,
    });

    console.log("wqqwwaf");

    res.status(200).json({
      success: true,
      message: "Student list fetched successfully",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
