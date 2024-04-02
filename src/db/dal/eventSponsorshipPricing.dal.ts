import EventSponsorship, { EventSponsorshipInput, EventSponsorshipOutput } from '../models/eventSponsorshipPricing.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EventSponsorshipInput): Promise<EventSponsorshipOutput> => {
    return await _create(EventSponsorship, payload);
}

export const update = async (id: number, payload: Partial<EventSponsorshipInput>): Promise<EventSponsorshipOutput> => {
    return await _update(id, EventSponsorship, payload);
}

export const getById = async (id: number): Promise<EventSponsorshipOutput> => {
    return await _getById<EventSponsorship>(id, EventSponsorship)
}

export const getAll = async (): Promise<EventSponsorshipOutput[]> => {
    return EventSponsorship.findAll()
}