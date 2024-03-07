import Profile, { ProfileInput, ProfileOutput } from '../models/profile.model'
import { getById as _getById, getAll as _getAll, create as _create, update as _update} from '../helpers';

export const create = async (payload: ProfileInput): Promise<ProfileOutput> => {
    return await _create(Profile, payload);
    //return await Profile.create(payload);
}

export const update = async (id: number, payload: Partial<ProfileInput>): Promise<ProfileOutput> => {
    return await _update(id, Profile, payload);


/*     const profile = await Profile.findByPk(id);

    if (!profile) {
        throw new Error('Profile Not Found');
    }

    return profile.update(payload); */
}

export const getById = async (id: number): Promise<ProfileOutput> => {
    const result = await _getById<Profile>(id, Profile);

    //const profile = await Profile.findByPk(id)

    if (!result) {
        throw new Error('Profile Not Found')
    }
    return result;
}

export const getAll = async (): Promise<ProfileOutput[]> => {
    return _getAll(Profile);
    //return Profile.findAll()
}
