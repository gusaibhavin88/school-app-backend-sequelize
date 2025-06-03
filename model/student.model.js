const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Student extends Model {
    static associations(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        as: "user",
      });
    }
  }
  Student.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },

      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        defaultValue: "male",
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "students",
      timestamps: true,
    }
  );

  return Student;
};
