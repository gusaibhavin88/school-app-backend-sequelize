const { createUser, listUser } = require("../controller/auth.controller");

const userRouter = require("express").Router();

userRouter.post("/create", createUser);
userRouter.get("/list", listUser);

module.exports = { userRouter };
