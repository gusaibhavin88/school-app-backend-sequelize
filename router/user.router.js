const {
  createUser,
  listUser,
  updateUser,
  deleteUser,
} = require("../controller/auth.controller");

const userRouter = require("express").Router();

userRouter.post("/create", createUser);
userRouter.get("/list", listUser);
userRouter.put("/update", updateUser);
userRouter.delete("/:userId", deleteUser);

module.exports = { userRouter };
