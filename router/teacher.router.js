const { createTeacher } = require("../controller/teacher.controller");

const teacherRouter = require("express").Router();

teacherRouter.post("create", createTeacher);

module.exports = { teacherRouter };
