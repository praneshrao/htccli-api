import { DataTypes, Model, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface timingAttributes {
    Id: number
    DayTypeId: number
    DayName: string
    Duration: string
    Active: boolean
}

export interface TimingInput extends Optional<timingAttributes, 'Id'> {}
export interface TimingOutput extends Required<timingAttributes> {}

class Timing extends Model<timingAttributes, TimingInput> implements timingAttributes { 
    public Id!: number
    public DayTypeId!: number
    public DayName!: string
    public Duration!: string
    public Active!: boolean
}

Timing.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DayTypeId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    DayName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Duration: {
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
    tableName: "Timings",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Timing);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Timing;
