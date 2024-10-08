import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { eventTypeAttributes } from '../../api/interfaces/eventType.interface';

export interface EventTypeInput extends Optional<eventTypeAttributes, 'Id'> {}
export interface EventTypeOutput extends Required<eventTypeAttributes> {}

class EventType extends Model<eventTypeAttributes, EventTypeInput> implements eventTypeAttributes {
    public Id!: number
    public TypeName!: string
    public Active!: boolean
}

EventType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    TypeName: {
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
    tableName: "EventTypes",
    hooks: {
        beforeCreate: (async (eventType: any) => {
        const nextId = await getNextId(EventType);  
        eventType.Id = nextId[0].Id+1;
        }),
    }
});

export default EventType;