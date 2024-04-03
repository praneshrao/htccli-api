import { EventDetailsInput, EventDetailsOutput } from '../models/eventDetails.model';
import * as dal from "../dal/eventDetails.dal";

export const create = async (payload: EventDetailsInput): Promise<EventDetailsOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EventDetailsInput>): Promise<EventDetailsOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EventDetailsOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EventDetailsOutput[]> => {
    return dal.getAll();
}