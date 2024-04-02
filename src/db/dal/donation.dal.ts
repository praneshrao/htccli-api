import Donation, { DonationInput, DonationOutput } from '../models/donation.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: DonationInput): Promise<DonationOutput> => {
    return await _create(Donation, payload);
}

export const update = async (id: number, payload: Partial<DonationInput>): Promise<DonationOutput> => {
    return await _update(id, Donation, payload);
}

export const getById = async (id: number): Promise<DonationOutput> => {
    return await _getById<Donation>(id, Donation)
}

export const getAll = async (): Promise<DonationOutput[]> => {
    return Donation.findAll()
}
