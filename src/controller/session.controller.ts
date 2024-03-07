import { Request, Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession, findSessions, updateSession } from "../service/session.service";
import { signJwt } from "../utils/jwt.utils";
import config from "config";

export async function createUserSessionHandler(req: Request, res:Response) {

    // Validate password
    const user = await validatePassword(req.body)
    if (!user || user === null) {
        return res.status(401).send("Invalid email or password");
    }
    // create a Session
    const session = await createSession(user.Id, req.get("user-agent") || "");

    console.log("Session -", session);

    // create a access token
    const accessToken = signJwt(
        {...user, session: session.Id},
        "accessTokenPrivateKey",
        {expiresIn: config.get("accessTokenTtl")}
    );

    // create a refresh token
    const refreshToken = signJwt(
        {...user, session: session.Id},
        "refreshTokenPrivateKey",
        {expiresIn: config.get("refreshTokenTtl")}
    );

    // return access and refresh tokens
    return res.send({accessToken, refreshToken});
}

export async function getUserSessionsHandler(req: Request, res: Response) {
//    console.log("Response Locals -",res.locals);
    const userId = res.locals.user.Id;
    const sessions = await findSessions(userId, true)
    return res.send(sessions);
  }
  
  export async function deleteUserSessionHandler(req: Request, res: Response) {
    const sessionId = res.locals.user.session;
    await updateSession(sessionId, false);
  
    return res.send({
      accessToken: null,
      refreshToken: null,
    });
  }