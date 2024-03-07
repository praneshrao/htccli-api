import { Router, Request, Response} from 'express'
import * as controller from "../controllers/deity.controller";
import { CreateDeityDTO, UpdateDeityDTO } from '../dto/deity.dto';
import validateResource from '../../middleware/validateResource';
import { CreateDeityInput, UpdateDeityInput, createDeitySchema, updateDeitySchema } from '../../schema/deity.schema';

const _router = Router();

_router.get('/:id',  async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    const result = await controller.getById(id);
    return res.status(200).send(result);
});

_router.put('/:Id', validateResource(updateDeitySchema), async (req: Request<UpdateDeityInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateDeityDTO = req.body
    
    const result = await controller.update(id, payload)
    return res.status(201).send(result)
})

_router.post('/', validateResource(createDeitySchema), async (req: Request<CreateDeityInput["body"]>, res: Response) => {
    const payload:CreateDeityDTO = req.body

    const result = await controller.create(payload)
    return res.status(200).send(result)
})

_router.get('/', async (req: Request, res: Response) => {
    const results = await controller.getAll();
    return res.status(200).send(results)
})

export default _router;