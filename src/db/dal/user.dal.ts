import User, { UserInput, UserOutput } from '../models/user.model'
import bcrypt from "bcrypt";

export const create = async (payload: UserInput): Promise<UserOutput> => {
    return await User.create(payload);
}

// Use it for any kind of update calls (PasswordReset)
export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User Not Found');
    }
    return user.update(payload);
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        throw new Error('User Not Found')
    }
    return user;
}

export const getAll = async (): Promise<UserOutput[]> => {
    return User.findAll()
}

// Validate Password
export async function validatePassword({email, password}:{email: string, password: string}): Promise<UserOutput> {
    const user = await User.findOne({ where: { Email: email } });
    if (user === null) {
        throw new Error('User Not Found')
    }

    if (!bcrypt.compare(password, user.PasswordHash)) {
        throw new Error("Password Validation failed");
    }
    return user.toJSON();
}
