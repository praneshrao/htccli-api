import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface deityAttributes {
    Id: number
    DeityName: string
    DeityImageFile: string
    Active: boolean
}

export interface DeityInput extends Optional<deityAttributes, 'Id'> {}
export interface DeityOutput extends Required<deityAttributes> {}

class Deity extends Model<deityAttributes, DeityInput> implements deityAttributes {
    public Id!: number
    public DeityName!: string
    public DeityImageFile!: string
    public Active!: boolean
}

Deity.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DeityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DeityImageFile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    freezeTableName: true, 
    timestamps: false,
    tableName: "Deities",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Deity);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Deity;