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
