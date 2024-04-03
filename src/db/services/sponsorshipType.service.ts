import { SponsorshipTypeInput, SponsorshipTypeOutput } from '../models/sponsorshipType.model';
import * as dal from "../dal/sponsorshipType.dal";

export const create = async (payload: SponsorshipTypeInput): Promise<SponsorshipTypeOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<SponsorshipTypeInput>): Promise<SponsorshipTypeOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<SponsorshipTypeOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<SponsorshipTypeOutput[]> => {
    return dal.getAll();
}