import * as service from "../../db/services/user.service";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";
import { IUser } from "../interfaces";

export const create = async(payload: CreateUserDTO): Promise<IUser> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateUserDTO): Promise<IUser> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<IUser> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<IUser[]> => {
    return await service.getAll();
}