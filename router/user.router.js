const {
  createUser,
  listUser,
  updateUser,
  deleteUser,
  groupUsers,
} = require("../controller/auth.controller");

const userRouter = require("express").Router();

userRouter.post("/create", createUser);
userRouter.get("/list", listUser);
userRouter.put("/update", updateUser);
userRouter.delete("/:userId", deleteUser);
userRouter.get("/group", groupUsers);

module.exports = { userRouter };
