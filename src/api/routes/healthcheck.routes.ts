import { Router, Request, Response} from 'express'

const _router = Router();

_router.get("/", (req: Request, res: Response) => res.sendStatus(200));

export default _router;