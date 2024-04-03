import Schedule, { ScheduleInput, ScheduleOutput } from '../models/schedule.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: ScheduleInput): Promise<ScheduleOutput> => {
    return await _create(Schedule, payload);
}

export const update = async (id: number, payload: Partial<ScheduleInput>): Promise<ScheduleOutput> => {
    return await _update(id, Schedule, payload);
}

export const getById = async (id: number): Promise<ScheduleOutput> => {
    return await _getById<Schedule>(id, Schedule)
}

export const getAll = async (): Promise<ScheduleOutput[]> => {
    return Schedule.findAll()
}
