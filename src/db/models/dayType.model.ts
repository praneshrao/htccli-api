import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface dayTypeAttributes {
    Id: number
    DayTypeName: string
    Active: boolean
}

export interface DayTypeInput extends Optional<dayTypeAttributes, 'Id'> {}
export interface DayTypeOutput extends Required<dayTypeAttributes> {}

class DayType extends Model<dayTypeAttributes, DayTypeInput> implements dayTypeAttributes {
    public Id!: number
    public DayTypeName!: string
    public Active!: boolean
}

DayType.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DayTypeName: {
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
    tableName: "DayTypes",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(DayType);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default DayType;