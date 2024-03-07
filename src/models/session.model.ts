import { DataTypes, NOW } from "sequelize";
import db from "../../config/database";

const SessionModel = db.define('AspNetUserSession', {
    Id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserAgent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
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
      tableName: "AspNetUserSession",
    }
);

export default SessionModel;