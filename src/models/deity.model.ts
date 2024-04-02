import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const DeityModel = db.define("Deities", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DeityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DeityImageFile: {
        type: DataTypes.STRING,
        allowNull: true
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
        tableName: "Deities",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Deity Id - ", profile.Id);
            }),
        }
    }
);

export async function getNextId() {
    return await DeityModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default DeityModel;