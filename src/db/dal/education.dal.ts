import Education, { EducationInput, EducationOutput } from '../models/education.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: EducationInput): Promise<EducationOutput> => {
    return await _create(Education, payload);
}

export const update = async (id: number, payload: Partial<EducationInput>): Promise<EducationOutput> => {
    return await _update(id, Education, payload);
}

export const getById = async (id: number): Promise<EducationOutput> => {
    return await _getById<Education>(id, Education)
}

export const getAll = async (): Promise<EducationOutput[]> => {
    return Education.findAll()
}
