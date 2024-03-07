import { Router, Request, Response} from 'express'
import * as userController from "../controllers/user.controller";
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import validateResource from '../../middleware/validateResource';
import { CreateUserInput, UpdateUserInput, createUserSchema, updateUserSchema } from '../../schema/user.schema';

const _router = Router();

_router.get('/:id',  async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    const result = await userController.getById(id);
    return res.status(200).send(result);
});

_router.put('/:Id', validateResource(updateUserSchema), async (req: Request<UpdateUserInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateUserDTO = req.body
    
    const result = await userController.update(id, payload)
    return res.status(201).send(result)
})

_router.post('/', validateResource(createUserSchema), async (req: Request<{},CreateUserInput["body"]>, res: Response) => {
    const payload:CreateUserDTO = req.body

    const result = await userController.create(payload)
    return res.status(201).send(result)
})

_router.get('/', async (req: Request, res: Response) => {
    const results = await userController.getAll();
    return res.status(200).send(results)
})

export default _router;