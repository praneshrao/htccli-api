import { Router, Request, Response} from 'express'
import * as controller from "../controllers/serviceType.controller";
import { CreateServiceTypeDTO, UpdateServiceTypeDTO } from '../dto/serviceType.dto';
import validateResource from '../../middleware/validateResource';
import { CreateInput, UpdateInput, createScheme, updateSchema } from '../../schema/serviceType.schema';

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

_router.put('/:Id', validateResource(updateSchema), async (req: Request<UpdateInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateServiceTypeDTO = req.body
    
    try {
        const result = await controller.update(id, payload)
        return res.status(201).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not updated");
    }
})

_router.post('/', validateResource(createScheme), async (req: Request<CreateInput["body"]>, res: Response) => {
    const payload:CreateServiceTypeDTO = req.body

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