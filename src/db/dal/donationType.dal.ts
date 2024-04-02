import DonationType, { DonationTypeInput, DonationTypeOutput } from '../models/donationType.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: DonationTypeInput): Promise<DonationTypeOutput> => {
    return await _create(DonationType, payload);
}

export const update = async (id: number, payload: Partial<DonationTypeInput>): Promise<DonationTypeOutput> => {
    return await _update(id, DonationType, payload);
}

export const getById = async (id: number): Promise<DonationTypeOutput> => {
    return await _getById<DonationType>(id, DonationType)
}

export const getAll = async (): Promise<DonationTypeOutput[]> => {
    return DonationType.findAll()    
}