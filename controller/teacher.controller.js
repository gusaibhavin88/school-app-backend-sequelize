exports.createTeacher = async (req, res) => {
  try {
    res.status(200).json({
      success: false,
      message: "Teacher created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
