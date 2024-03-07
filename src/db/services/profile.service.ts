import { ProfileInput, ProfileOutput } from '../models/profile.model'
import * as profileDAL from "../dal/profile.dal";

export const create = async (payload: ProfileInput): Promise<ProfileOutput> => {
    return profileDAL.create(payload)
}

export const update = async (id: number, payload: Partial<ProfileInput>): Promise<ProfileOutput> => {
    return profileDAL.update(id, payload);
}

export const getById = async (id: number): Promise<ProfileOutput> => {
    return profileDAL.getById(id);
}

export const getAll = async (): Promise<ProfileOutput[]> => {
    return profileDAL.getAll();
}