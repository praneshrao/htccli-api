import { Request, Response, NextFunction } from "express";

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;

  //console.log(user);
  if (!user) {
    return res.status(401).send("Session expired - Request failed!");
  }

  return next();
};

export default requireUser;