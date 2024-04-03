import { DonationInput, DonationOutput } from '../models/donation.model';
import * as dal from "../dal/donation.dal";

export const create = async (payload: DonationInput): Promise<DonationOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<DonationInput>): Promise<DonationOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<DonationOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<DonationOutput[]> => {
    return dal.getAll();
}