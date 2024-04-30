import { Router, Request, Response} from 'express'
import * as controller from "../controllers/donation.controller";
import { CreatedonationDTO, UpdateDonationDTO } from '../dto/donation.dto';
import validateResource from '../../middleware/validateResource';
import { CreateInput, UpdateInput, createScheme, updateSchema } from '../../schema/donation.schema';
import requireUser from '../../middleware/requireUser';

const _router = Router();

_router.get('/:id', requireUser, async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    try {
        const result = await controller.getById(id);
        return res.status(200).send(result);
    } catch(error: any) {
        return res.status(404).send("No Data Found");
    }
});

_router.put('/:Id', requireUser, validateResource(updateSchema), async (req: Request<UpdateInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateDonationDTO = req.body
    
    try {
        const result = await controller.update(id, payload)
        return res.status(201).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not updated");
    }
})

_router.post('/', requireUser, validateResource(createScheme), async (req: Request<CreateInput["body"]>, res: Response) => {
    const payload:CreatedonationDTO = req.body

    try {
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch(error: any) {
        return res.status(400).send("Data not created");
    }
})

_router.get('/', requireUser, async (req: Request, res: Response) => {
    try {
        const results = await controller.getAll();
        return res.status(200).send(results)
    } catch(error: any ) {
        return res.status(404).send("Data not found");
    }
})

export default _router;