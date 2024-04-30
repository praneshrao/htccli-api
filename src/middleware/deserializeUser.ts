import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../serviceold/session.service";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refreshToken = get(req, "headers.x-refresh");

  if (!accessToken) {
    return next();
  }
  
 
  const { decoded, expired } = verifyJwt(accessToken, "accessTokenPublicKey");
  if (expired && refreshToken) {
    console.log("Inside expired");
    const newAccessToken = await reIssueAccessToken({ refreshToken });

    if (newAccessToken) {
      res.setHeader("x-access-token", newAccessToken);
    }
    const {decoded, expired} = verifyJwt(newAccessToken as string, "accessTokenPublicKey");

    res.locals.user = decoded;

    return next();
  }

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next();
};

export default deserializeUser;