const { createUser } = require("../controller/auth.controller");

const userRouter = require("express").Router();

userRouter.post("/create", createUser);

module.exports = { userRouter };
