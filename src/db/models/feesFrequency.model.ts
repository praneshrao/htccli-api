import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface feeFreqencyAttributes {
    Id: number
    Frequency: string
    Active: boolean
}

export interface FeeFrequencyInput extends Optional<feeFreqencyAttributes, 'Id'> {}
export interface FeeFrequencyeOutput extends Required<feeFreqencyAttributes> {}

class FeeFrequency extends Model<feeFreqencyAttributes, FeeFrequencyInput> implements feeFreqencyAttributes {
    public Id!: number
    public Frequency!: string
    public Active!: boolean
}

FeeFrequency.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    Frequency: {
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
    tableName: "FeesFrequency",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(FeeFrequency);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default FeeFrequency;