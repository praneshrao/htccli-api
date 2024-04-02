import { Router } from "express";
import profileRouter from "./profile.routes";
import scheduleRouter from "./schedule.routes";
import sessionRouter from './session.routes';
import userRouter from './user.routes';
import deityRouter from "./deity.routes";
import healthcheckRouter from "./healthcheck.routes";

const router = Router()

router.use('/profile', profileRouter);
router.use('/schedule', scheduleRouter);
router.use('/session',sessionRouter);
router.use('/user', userRouter);
router.use('/deity', deityRouter);
router.use('/healthcheck', healthcheckRouter)


export default router;