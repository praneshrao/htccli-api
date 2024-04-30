import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import db from "../../utils/connect";
import { getNextId } from '../helpers';
import { ISchedule } from '../../api/interfaces/schedule.interface';

export interface ScheduleInput extends Optional<ISchedule, "Id"> {}
export interface ScheduleOutput extends Required<ISchedule> {}

class Schedule extends Model<ISchedule, ScheduleInput> implements ISchedule {
    public Id!: number
    public Name!: string
    public Time!: string
    public Active!: boolean
}

Schedule.init({
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false,
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
        beforeCreate: (async (dailySchedule: any) => {
        const nextId = await getNextId(Schedule);  
        dailySchedule.Id = nextId[0].Id+1;
        }),
    }
});

export default Schedule;