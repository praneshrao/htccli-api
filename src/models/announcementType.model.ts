import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const AnnouncementTypeModel = db.define("AnnouncementTypes", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    AnnouncementTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
    {
        // Freeze Table Name
        freezeTableName: true, 
        timestamps: false,
        tableName: "AnnouncementTypes",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Announcement Type Id - ", profile.Id);
            }),
        }
    }
);

export async function getNextId() {
    return await AnnouncementTypeModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default AnnouncementTypeModel;