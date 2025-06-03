const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associations(models) {
      this.hasMany(models.Student, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      name: {
        type: DataTypes.STRING,
        unique: true,
      },

      role: {
        type: DataTypes.ENUM("admin", "teacher", "student"),
        defaultValue: "student",
      },
    },
    {
      sequelize,
      modelName: "User",
      timestamps: true,
    }
  );

  return User;
};
