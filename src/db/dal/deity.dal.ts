import Deity, { DeityInput, DeityOutput } from '../models/deity.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: DeityInput): Promise<DeityOutput> => {
    return await _create(Deity, payload);
}

export const update = async (id: number, payload: Partial<DeityInput>): Promise<DeityOutput> => {
    return await _update(id, Deity, payload);
}

export const getById = async (id: number): Promise<DeityOutput> => {
    return await _getById<Deity>(id, Deity)
}

export const getAll = async (): Promise<DeityOutput[]> => {
    return Deity.findAll()
}
