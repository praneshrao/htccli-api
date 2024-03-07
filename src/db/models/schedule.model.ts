import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';

interface scheduleAttributes {
    Id: number
    Name: string
    Time: string
    Active: boolean
}

export interface ScheduleInput extends Optional<scheduleAttributes, "Id"> {}
export interface ScheduleOutput extends Required<scheduleAttributes> {}

class Schedule extends Model<scheduleAttributes, ScheduleInput> implements scheduleAttributes {
    public Id!: number
    public Name!: string
    public Time!: string
    public Active!: boolean
}

Schedule.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Time: {
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
    tableName: "DailySchedules",
    hooks: {
        beforeCreate: (async (schedule: any) => {
        const nextId = await getNextId(Schedule);  
        schedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Schedule;