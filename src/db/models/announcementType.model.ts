import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface announcementTypeAttributes {
    Id: number
    AnnouncementTypeName: string
    Active: boolean
}

export interface AnnouncementTypeInput extends Optional<announcementTypeAttributes, 'Id'> {}
export interface AnnouncementTypeOutput extends Required<announcementTypeAttributes> {}

class AnnouncementType extends Model<announcementTypeAttributes, AnnouncementTypeInput> implements announcementTypeAttributes {
    public Id!: number
    public AnnouncementTypeName!: string
    public Active!: boolean
}

AnnouncementType.init({
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
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "AnnouncementTypes",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(AnnouncementType);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default AnnouncementType;
