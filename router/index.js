const { teacherRouter } = require("./teacher.router");

const router = require("express").Router();

router.use("/teacher", teacherRouter);
module.exports = { router };
