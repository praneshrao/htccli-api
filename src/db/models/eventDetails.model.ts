import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { evernDetailAttributes } from '../../api/interfaces/eventDetails.interface';

export interface EventDetailsInput extends Optional<evernDetailAttributes, 'Id'> {}
export interface EventDetailsOutput extends Required<evernDetailAttributes> {}

class EventDetails extends Model<evernDetailAttributes, EventDetailsInput> implements evernDetailAttributes { 
    public Id!: number
    public EventId!: number
    public Description!: string
    public ShortDesc!: string
    public StartDate!: string
    public EndDate!: string
    public Active!: boolean
}

EventDetails.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    EventId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ShortDesc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StartDate: {
        type: DataTypes.STRING,
        allowNull: false
    },   
    EndDate: {
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
    tableName: "EventDetails",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(EventDetails);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
})

export default EventDetails;