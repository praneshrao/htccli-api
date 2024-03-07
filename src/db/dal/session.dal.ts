import { get } from 'lodash';
import { signJwt, verifyJwt } from '../../utils/jwt.utils';
import Session, {SessionInput, SessionOutput} from '../models/session.model';
import config from 'config';
import { getById as getUserById} from './user.dal';

export const create = async (payload: SessionInput): Promise<SessionOutput> => {
    return await Session.create(payload);
}

export const update = async (id: string, payload: Partial<SessionInput>): Promise<SessionOutput> => {
    const session = await Session.findByPk(id);
    if (!session) {
        throw new Error("Session not found");
    }
    return session.update(payload);
}

export const remove = async (id: string, payload: Partial<SessionInput>): Promise<SessionOutput> => {
    const session = await Session.findByPk(id);
    if (!session) {
        throw new Error("Session not found");
    }
    return session.update(payload);
}

export const getById = async (id: string, valid: boolean): Promise<SessionOutput> => {
    const session = await Session.findOne({ where: { UserId: id, Valid: valid } });
    if (!session) {
        throw new Error("Session not found");
    }
    return session;
}

export async function reIssueAccessToken({
    refreshToken,}: {refreshToken: any;          //originally it was string
}) {
    const { decoded } = verifyJwt(refreshToken, "refreshTokenPublicKey");
    if (!decoded || !get(decoded, "session")) return false;  

    const session = await Session.findByPk(get(decoded, "session"));  
    if (!session ) return false;  

    const id = Number(session.getDataValue("UserId"));
    const user = await getUserById(id);  
    if (!user) return false;  

    const accessToken = signJwt(
      { ...user, session: session.getDataValue("Id") },
      "accessTokenPrivateKey",
      { expiresIn: config.get("accessTokenTtl") } // 15 minutes
    );
  
    return accessToken;
  }