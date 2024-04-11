import Donation, { DonationInput, DonationOutput } from '../models/donation.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';
import DonationType from '../models/donationType.model';

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
    const result = await Donation.findAll({
        include: [{
            model: DonationType,
            required: true
        }],
        order: [
            ['Id', 'DESC']
        ]
    });
    return result;
}
