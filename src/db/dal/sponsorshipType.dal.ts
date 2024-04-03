import SponsorshipType, { SponsorshipTypeInput, SponsorshipTypeOutput } from '../models/sponsorshipType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: SponsorshipTypeInput): Promise<SponsorshipTypeOutput> => {
    return await _create(SponsorshipType, payload);
}

export const update = async (id: number, payload: Partial<SponsorshipTypeInput>): Promise<SponsorshipTypeOutput> => {
    return await _update(id, SponsorshipType, payload);
}

export const getById = async (id: number): Promise<SponsorshipTypeOutput> => {
    return await _getById<SponsorshipType>(id, SponsorshipType)
}

export const getAll = async (): Promise<SponsorshipTypeOutput[]> => {
    return SponsorshipType.findAll()    
}