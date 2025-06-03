const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { router } = require("./router");
require("./config/sequelize.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at Port ${process.env.PORT}`);
});
