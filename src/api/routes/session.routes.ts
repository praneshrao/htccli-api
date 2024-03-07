import { Router, Request, Response} from 'express'
import * as sessionController from '../controllers/session.controller';
import { CreateSessionDTO, UpdateSessionDTO, DeleteSessionDTO } from '../dto/session.dto';
import { validatePassword } from '../../service/user.service';
import { signJwt } from '../../utils/jwt.utils';
import config from 'config';
import dayjs from 'dayjs';

const sessionRouter = Router();

sessionRouter.post('/', async (req: Request, res: Response) => {
    const user = await validatePassword(req.body);
    if (!user || user === null) {
        return res.status(401).send("Invalid email or password");
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
})

sessionRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const valid = true;

    const result = await sessionController.getById(id, valid)
    return res.status(200).send(result);
});

sessionRouter.delete('/:id', async (req: Request, res: Response) => {
    const updateDate = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
    const id = req.params.id;

    const payload: UpdateSessionDTO = {
        Id: id,
        Valid: false,
        updatedAt: updateDate,
    }
    const result = await sessionController.remove(id, payload)
    if (!result) {
        return res.status(401).send("Session not found");
    }
    return res.send({
        accessToken: null,
        refreshToken: null,
      });
});

export default sessionRouter;