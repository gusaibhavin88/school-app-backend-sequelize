const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.error("Issue in Database connection:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("../model/user.model")(sequelize);
db.Student = require("../model/student.model")(sequelize);

db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database sync successful.");
  })
  .catch((err) => {
    console.error("Error during database sync:", err);
  });

module.exports = db;
