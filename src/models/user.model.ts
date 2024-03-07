import { DataTypes } from "sequelize";
import db from "../../config/database";
import bcrypt from "bcrypt";
import config from "config";

const UserModel = db.define('AspNetUsers', {
    Id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    EmailConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    PasswordHash: {
      type: DataTypes.STRING,
      allowNull: true
    },
    SecurityStamp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    PhoneNumberConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    TwoFactorEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    LockoutEndDateUtc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LockoutEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    AccessFailedCount: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updatedAt: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  },
    {
      // Freeze Table Name
      freezeTableName: true, 
      timestamps: false,
      tableName: "AspNetUsers",
      hooks: {
        beforeCreate: (async (user: any, options) => {
          const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));   
          const hash = bcrypt.hashSync(user.PasswordHash, salt);     
          user.PasswordHash = hash;
        }),
        beforeUpdate: (async (user: any, options) => {
          const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));   
          const hash = bcrypt.hashSync(user.PasswordHash, salt);     
          user.PasswordHash = hash;
        }),
      }
    }, 
  );

  export default UserModel;

