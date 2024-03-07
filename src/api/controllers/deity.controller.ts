import * as service from "../../db/services/deity.service";
import { CreateDeityDTO, UpdateDeityDTO } from "../dto/deity.dto";
import { IDeity} from "../interfaces";

export const create = async(payload: CreateDeityDTO): Promise<IDeity> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateDeityDTO): Promise<IDeity> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<IDeity> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<IDeity[]> => {
    return await service.getAll();
}