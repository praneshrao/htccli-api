import { Router, Request, Response} from 'express'
import * as userController from "../controllers/user.controller";
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
import validateResource from '../../middleware/validateResource';
import { CreateUserInput, UpdateUserInput, createUserSchema, updateUserSchema } from '../../schema/user.schema';

const _router = Router();

_router.get('/:id',  async (req:Request, res:Response) => {
    const id = String(req.params.id);
    try {
        const result = await userController.getById(id);
        return res.status(200).send(result);
    } catch(error: any) {
        return res.status(404).send("No Data Found");
    }
 
});

_router.put('/:Id', validateResource(updateUserSchema), async (req: Request<UpdateUserInput["params"]>, res: Response) => {
    const id = String(req.params.Id);
    const payload:UpdateUserDTO = req.body
    try{
        const result = await userController.update(id, payload)
        return res.status(201).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not updated");
    }

})

_router.post('/', validateResource(createUserSchema), async (req: Request<{},CreateUserInput["body"]>, res: Response) => {
    const payload:CreateUserDTO = req.body
    try {
        const result = await userController.create(payload)
        return res.status(201).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not created");
    }
 
})

_router.get('/', async (req: Request, res: Response) => {
    try {
        const results = await userController.getAll();
        return res.status(200).send(results)
    } catch(error: any) {
        return res.status(404).send("Data not found");
    }

})

export default _router;