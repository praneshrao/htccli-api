import { UserInput, UserOutput } from '../models/user.model'
import * as userDAL from "../dal/user.dal";

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return userDAL.create(payload)
}

export const update = async (id: string, payload: Partial<UserInput>): Promise<UserOutput> => {
    return userDAL.update(id, payload);
}

export const getById = async (id: string): Promise<UserOutput> => {
    return userDAL.getById(id);
}

export const getAll = async (): Promise<UserOutput[]> => {
    return userDAL.getAll();
}