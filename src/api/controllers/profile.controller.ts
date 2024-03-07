import * as service from "../../db/services/profile.service";
import { CreateProfileDTO, UpdateProfileDTO } from "../dto/profile.dto";
import { IProfile} from "../interfaces";

export const create = async(payload: CreateProfileDTO): Promise<IProfile> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateProfileDTO): Promise<IProfile> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<IProfile> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<IProfile[]> => {
    return await service.getAll();
}