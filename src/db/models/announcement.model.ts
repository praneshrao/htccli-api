import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { announcementAttributes } from '../../api/interfaces/announcement.interface';

export interface AnnouncementInput extends Optional<announcementAttributes, 'Id'> {}
export interface AnnouncementOutput extends Required<announcementAttributes> {}

class Announcement extends Model<announcementAttributes, AnnouncementInput> implements announcementAttributes {
    public Id!: number
    public AnnouncementTypeId!: number
    public AnnouncementName!: string
    public ShortDesc!: string
    public LongDesc!: string
    public AnnouncementDate!: string
    public ValidUntilDate!: string
    public ImageFile!: string
    public ExternalURL!: string
    public FlyerName!: string
    public DisplayOrder!: number
    public Active!: boolean
}

Announcement.init({
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
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "Announcements",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Announcement);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Announcement;