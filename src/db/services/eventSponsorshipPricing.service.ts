import { EventSponsorshipInput, EventSponsorshipOutput } from '../models/eventSponsorshipPricing.model';
import * as dal from "../dal/eventSponsorshipPricing.dal";

export const create = async (payload: EventSponsorshipInput): Promise<EventSponsorshipOutput> => {
    return dal.create(payload)
}

export const update = async (id: number, payload: Partial<EventSponsorshipInput>): Promise<EventSponsorshipOutput> => {
    return dal.update(id, payload);
}

export const getById = async (id: number): Promise<EventSponsorshipOutput> => {
    return dal.getById(id);
}

export const getAll = async (): Promise<EventSponsorshipOutput[]> => {
    return dal.getAll();
}