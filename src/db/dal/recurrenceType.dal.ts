import RecurrenceType, { RecurrenceTypeInput, RecurrenceTypeOutput } from '../models/recurrenceType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: RecurrenceTypeInput): Promise<RecurrenceTypeOutput> => {
    return await _create(RecurrenceType, payload);
}

export const update = async (id: number, payload: Partial<RecurrenceTypeInput>): Promise<RecurrenceTypeOutput> => {
    return await _update(id, RecurrenceType, payload);
}

export const getById = async (id: number): Promise<RecurrenceTypeOutput> => {
    return await _getById<RecurrenceType>(id, RecurrenceType)
}

export const getAll = async (): Promise<RecurrenceTypeOutput[]> => {
    return RecurrenceType.findAll()    
}