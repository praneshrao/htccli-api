import DayType,  { DayTypeInput, DayTypeOutput } from '../models/dayType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: DayTypeInput): Promise<DayTypeOutput> => {
    return await _create(DayType, payload);
}

export const update = async (id: number, payload: Partial<DayTypeInput>): Promise<DayTypeOutput> => {
    return await _update(id, DayType, payload);
}

export const getById = async (id: number): Promise<DayTypeOutput> => {
    return await _getById<DayType>(id, DayType)
}

export const getAll = async (): Promise<DayTypeOutput[]> => {
    return DayType.findAll()    
}