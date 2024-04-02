import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const EducationModel = db.define("EducationPrograms", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    FeeFrequencyId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EducationTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EducationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DayTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Fees: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Register: {
        type: DataTypes.BOOLEAN,
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
        tableName: "EducationPrograms",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Education Id - ", profile.Id);
            }),
        }
    }
);

export async function getNextId() {
    return await EducationModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default EducationModel;