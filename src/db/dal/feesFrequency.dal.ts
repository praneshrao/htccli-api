import FeeFrequency, { FeeFrequencyInput, FeeFrequencyeOutput } from '../models/feesFrequency.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: FeeFrequencyInput): Promise<FeeFrequencyeOutput> => {
    return await _create(FeeFrequency, payload);
}

export const update = async (id: number, payload: Partial<FeeFrequencyInput>): Promise<FeeFrequencyeOutput> => {
    return await _update(id, FeeFrequency, payload);
}

export const getById = async (id: number): Promise<FeeFrequencyeOutput> => {
    return await _getById<FeeFrequency>(id, FeeFrequency)
}

export const getAll = async (): Promise<FeeFrequencyeOutput[]> => {
    return FeeFrequency.findAll()
}
