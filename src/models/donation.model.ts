import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const DonationModel = db.define("Donations" , {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DonationTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DonationName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MinAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    MaxAmount: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    PayOnline: {
        type: DataTypes.BOOLEAN,
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
        tableName: "Donations",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Donation Id - ", profile.Id);
            }),
        }
    }
);

export async function getNextId() {
    return await DonationModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default DonationModel;