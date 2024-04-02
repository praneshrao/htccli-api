import {get} from "lodash";
import { signJwt, verifyJwt } from "../utils/jwt.utils";
import config from "config";
import SessionModel from "../models/session.model";
import { findUser } from "./user.service";
import logger from "../utils/logger";
import { v4 as uuidv4 } from 'uuid';
import { NOW } from "sequelize";
import dayjs from "dayjs";

export async function createSession(UserId: string, UserAgent: string) {
    try {
      const Id = uuidv4();
      const session = await SessionModel.create({Id: Id, UserId: UserId, UserAgent:UserAgent, Valid: true} );
      return session.toJSON();
    } catch(err: any) {
      logger.error("CreateSession Error - ",err.message);
    }
    return null;
}

export async function findSessions(userId: string, Valid: boolean) {
  const createdDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
  return SessionModel.findOne({ where: { UserId: userId, Valid: Valid, createdAt: createdDate } });
}

export async function updateSession(sessionId: string, Valid: boolean) {
  const updatedDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
  return await SessionModel.update({Valid: Valid, updatedAt: updatedDate}, {
    where: {
        Id: sessionId
    }
  });
  //return SessionModel.findOne({ where: { Id: sessionId, Valid: Valid } });
}

export async function reIssueAccessToken({
    refreshToken,
  }: {
    refreshToken: any;   //originally it was string
  }) {

    const { decoded } = verifyJwt(refreshToken, "refreshTokenPublicKey");

    console.log("Decoded - ",decoded);

    if (!decoded || !get(decoded, "session")) return false;  

    const session = await SessionModel.findByPk(get(decoded, "session"));  

    if (!session ) return false;  

    const id = session.getDataValue("UserId");
 
    const user = await findUser(id);  
  
    if (!user) return false;  

    const accessToken = signJwt(
//      { ...user, session: session.getDataValue("Id") },
        { session: session.getDataValue("Id") },
      "accessTokenPrivateKey",
      { expiresIn: config.get("accessTokenTtl") } // 15 minutes
    );
  
    return accessToken;
  }

