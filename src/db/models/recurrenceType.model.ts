import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { recurrenceTypeAttributes } from '../../api/interfaces/recurrenceType.interface';

export interface RecurrenceTypeInput extends Optional<recurrenceTypeAttributes, 'Id'> {}
export interface RecurrenceTypeOutput extends Required<recurrenceTypeAttributes> {}

class RecurrenceType extends Model<recurrenceTypeAttributes, RecurrenceTypeInput> implements recurrenceTypeAttributes {
    public Id!: number
    public RecurrenceName!: string
    public Active!: boolean
}

RecurrenceType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    ReccurenceName: {
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
    tableName: "RecurrenceTypes",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(RecurrenceType);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default RecurrenceType;