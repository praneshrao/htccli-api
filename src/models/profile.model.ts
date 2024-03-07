import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const ProfileModel = db.define("TempleProfile", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    TempleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TempleShortName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleLogo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleBanner: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TempleDescription: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Address1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    City: {
        type: DataTypes.STRING,
        allowNull: true
    },
    State: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ZipCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    EmailAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    TaxID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    WebsiteURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Latitude: {
        type: DataTypes.DECIMAL(9,7),
        allowNull: true
    },
    Longitude: {
        type: DataTypes.DECIMAL(9,7),
        allowNull: true
    },
    PlusCode: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        // Freeze Table Name
        freezeTableName: true, 
        timestamps: false,
        tableName: "TempleProfile",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Profile Id - ", profile.Id);
            }),
        }
    },
);

export async function getNextId() {
    return await ProfileModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default ProfileModel;