import { Router, Request, Response} from 'express'
import * as sessionController from '../controllers/session.controller';
import { CreateSessionDTO, UpdateSessionDTO, DeleteSessionDTO } from '../dto/session.dto';
import { validatePassword } from '../../serviceold/user.service';
import { signJwt } from '../../utils/jwt.utils';
import config from 'config';
import dayjs from 'dayjs';

const sessionRouter = Router();

sessionRouter.post('/', async (req: Request, res: Response, next) => {
    try {
        if (req.body == null) {
            return res.status(401).send("Invalid email or password");
        }
        const user = await validatePassword(req.body);
        if (!user || user === null) {
            return res.status(400).send("Invalid email or password");
        }

        let payload:CreateSessionDTO = {
            Id: "",
            UserId: user.Id,
            UserAgent: req.get("user-agent") || "",
            Valid: true,
            createdAt: "",
            updatedAt: ""
        }
        //const payload:CreateSessionDTO = req.body
        // create a Session
        const session = await sessionController.create(payload) 

        // create a access token
        const accessToken = signJwt(
            { session: session.Id},
            "accessTokenPrivateKey",
            {expiresIn: config.get("accessTokenTtl")}
        );

        // create a refresh token
        const refreshToken = signJwt(
            { session: session.Id},
            "refreshTokenPrivateKey",
            {expiresIn: config.get("refreshTokenTtl")}
        );

        // return access and refresh tokens
        return res.send({session: session.Id, accessToken, refreshToken});
    } catch(error: any) {
        next(error);
    }
})

sessionRouter.post('/refresh', async (req: Request, res: Response, next) => {
    try {
        if (req.body == null) {
            return res.status(401).send("Invalid session id");
        }

        // create a refresh token
        const refreshToken = signJwt(
            { session: req.body},
            "refreshTokenPrivateKey",
            {expiresIn: config.get("refreshTokenTtl")}
        );

        return res.send({session: req.body, accessToken: refreshToken});
    } catch(error: any) {
        next(error);
    }
})

sessionRouter.get('/:id', async (req: Request, res: Response, next) => {
    const id = req.params.id;
    const valid = true;
    try {
        const result = await sessionController.getById(id, valid)
        return res.status(200).send(result);
    } catch(error: any) {
        next(error);
        //return res.status(404).send("No Data Found");
    }

});

sessionRouter.delete('/:id', async (req: Request, res: Response, next) => {
    try {
        const updateDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
        const id = req.params.id;

        const payload: UpdateSessionDTO = {
            Id: id,
            Valid: false,
            updatedAt: updateDate,
        }
        const result = await sessionController.remove(id, payload)
        if (!result) {
            return res.status(404).send("Session not found");
        }
        return res.send({
            accessToken: null,
            refreshToken: null,
        });
    } catch(error: any) {
        next(error);
    }
});

/* sessionRouter.all('*', async (req: Request, res: Response, next) => {
    const err: any = new Error(`Can't find ${req.originalUrl} on the server!`)
    err.status = "failed";
    err.statusCode = 404;
    next(err);
}) */

export default sessionRouter;