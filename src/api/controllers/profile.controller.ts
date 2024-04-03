import * as service from "../../db/services/profile.service";
import { CreateProfileDTO, UpdateProfileDTO } from "../dto/profile.dto";
import { profileAttributes} from "../interfaces";

export const create = async(payload: CreateProfileDTO): Promise<profileAttributes> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateProfileDTO): Promise<profileAttributes> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<profileAttributes> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<profileAttributes[]> => {
    return await service.getAll();
}