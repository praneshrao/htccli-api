import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const scheduleModel = db.define("DailySchedules", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Time: {
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
    tableName: "DailySchedules",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId();  
        console.log("Next Id -", nextId[0].Id+1);
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export async function getNextId() {
    return await scheduleModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default scheduleModel;
