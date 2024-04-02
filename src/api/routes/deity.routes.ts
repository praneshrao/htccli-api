import { Router, Request, Response} from 'express'
import * as controller from "../controllers/deity.controller";
import { CreateDeityDTO, UpdateDeityDTO } from '../dto/deity.dto';
import validateResource from '../../middleware/validateResource';
import { CreateDeityInput, UpdateDeityInput, createDeitySchema, updateDeitySchema } from '../../schema/deity.schema';

const _router = Router();

_router.get('/:id',  async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    try {
        const result = await controller.getById(id);
        return res.status(200).send(result);
    } catch(error: any) {
        return res.status(404).send("No Data Found");
    }
});

_router.put('/:Id', validateResource(updateDeitySchema), async (req: Request<UpdateDeityInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateDeityDTO = req.body
    
    try {
        const result = await controller.update(id, payload)
        return res.status(201).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not updated");
    }
})

_router.post('/', validateResource(createDeitySchema), async (req: Request<CreateDeityInput["body"]>, res: Response) => {
    const payload:CreateDeityDTO = req.body

    try {
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not created");
    }
})

_router.get('/', async (req: Request, res: Response) => {
    try {
        const results = await controller.getAll();
        return res.status(200).send(results)
    } catch(error: any ) {
        return res.status(404).send("Data not found");
    }
})

export default _router;