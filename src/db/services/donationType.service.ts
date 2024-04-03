import { DonationTypeInput, DonationTypeOutput } from '../models/donationType.model';
import * as dal from "../dal/donationType.dal";

export const create = async (payload: DonationTypeInput): Promise<DonationTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<DonationTypeInput>): Promise<DonationTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<DonationTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<DonationTypeOutput[]> => {
    return dal.getAll();
}