import { DataTypes, col, fn } from "sequelize";
import db from "../../config/database";

const AnnouncementModel = db.define("Announcements", {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    AnnouncementTypeID: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    AnnouncementName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ShortDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LongDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AnnouncementDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ValidUntilDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ExternalURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    FlyerName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    DisplayOrder: {
        type: DataTypes.NUMBER,
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
        tableName: "Announcements",
        hooks: {
            beforeCreate: (async (profile: any) => {
            const nextId = await getNextId();  
            console.log("Next ID -", nextId[0].Id+1);
            profile.Id = nextId[0].Id+1;
            console.log("Announcement Id - ", profile.Id);
            }),
        }
    }
);

export async function getNextId() {
    return await AnnouncementModel.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export default AnnouncementModel;