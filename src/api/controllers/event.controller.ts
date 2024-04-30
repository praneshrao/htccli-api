import * as service from "../../db/services/event.service";
import { CreateEventDTO as CreateDTO, UpdateEventDTO as UpdateDTO } from "../dto/event.dto";
import { eventAttributes as T} from "../interfaces";

export const create = async(payload: CreateDTO): Promise<T> => {
    return await service.create(payload);
}

export const update = async (id: number, payload: UpdateDTO): Promise<T> => {
    return await service.update(id, payload);
}

export const getById = async (id: number): Promise<T> => {
    return await service.getById(id);
}

export const getAll = async(): Promise<T[]> => {
    return await service.getAll();
}

export const getCount = async () => {
    return await service.getCount();
}