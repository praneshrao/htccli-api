import Education, { EducationInput, EducationOutput } from '../models/education.model';
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';
import EducationType from '../models/educationType.model';
import FeeFrequency from '../models/feesFrequency.model';

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
    const result = await Education.findAll({
        include: [{
            model: EducationType,
            required: true
        },
        {
            model: FeeFrequency,
            required: true
        }
        ],
        order: [
            ['Id', 'DESC']
        ]
    });
    return result;
}

export const getCount = async () => {
    const count = await Education.count();
return count;
}
