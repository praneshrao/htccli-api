import { Router, Request, Response} from 'express'
import * as controller from "../controllers/announcement.controller";
import { CreateAnnouncementDTO, UpdateAnnouncementDTO } from '../dto/announcement.dto';
import validateResource from '../../middleware/validateResource';
import { CreateInput, UpdateInput, createScheme, updateSchema } from '../../schema/announcement.schema';
import logger from '../../utils/logger';

const _router = Router();

_router.get('/:id',  async (req:Request, res:Response, next) => {
    const id = Number(req.params.id);

    try {
        const result = await controller.getById(id);
        return res.status(200).send(result);
    } catch(error: any) {
        next(error);
        //return res.status(404).send("getById - No Data Found");
    }
});

_router.put('/:Id', validateResource(updateSchema), async (req: Request<UpdateInput["params"]>, res: Response, next) => {
    const id = Number(req.params.Id);
    const payload:UpdateAnnouncementDTO = req.body
    
    try {
        const result = await controller.update(id, payload)
        return res.status(201).send(result)
    } catch(error: any) {
        next(error);
        //return res.status(400).send("update - Data not updated");
    }
})

_router.post('/', validateResource(createScheme), async (req: Request<CreateInput["body"]>, res: Response, next) => {
    const payload:CreateAnnouncementDTO = req.body

    try {
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch(error: any) {
        next(error);
        //return res.status(400).send("create - Data not created");
    }
})

_router.get('/', async (req: Request, res: Response, next) => {
    try {
        const results = await controller.getAll();
        return res.status(200).send(results)
    } catch(error: any) {
        next(error);
        //return res.status(404).send("getAll - No data found - " + error);
    }
})

_router.post('/count', async (req:Request, res: Response, next) => {
    try {
        const result = await controller.getCount();
        logger.info(result);
        return res.json(result);
    }catch(error: any) {
        next(error);
        //return res.status(400).send("getCount - No data found - " + error)
    }
})

export default _router;