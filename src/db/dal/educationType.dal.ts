import EducationType, { EducationTypeInput, EducationTypeOutput } from '../models/educationType.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EducationTypeInput): Promise<EducationTypeOutput> => {
    return await _create(EducationType, payload);
}

export const update = async (id: number, payload: Partial<EducationTypeInput>): Promise<EducationTypeOutput> => {
    return await _update(id, EducationType, payload);
}

export const getById = async (id: number): Promise<EducationTypeOutput> => {
    return await _getById<EducationType>(id, EducationType)
}

export const getAll = async (): Promise<EducationTypeOutput[]> => {
    return EducationType.findAll()    
}