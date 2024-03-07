import { Router, Request, Response} from 'express'
import * as scheduleController from "../controllers/schedule.controller";
import { CreateScheduleDTO, UpdateScheduleDTO } from '../dto/schedule.dto';
import validateResource from '../../middleware/validateResource';
import { CreateScheduleInput, UpdateScheduleInput, createScheduleSchema, updateScheduleSchema } from '../../schema/schedule.schema';

const scheduleeRouter = Router();

scheduleeRouter.get('/:id',  async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    const result = await scheduleController.getById(id);
    return res.status(200).send(result);
});

scheduleeRouter.put('/:Id', validateResource(updateScheduleSchema), async (req: Request<UpdateScheduleInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateScheduleDTO = req.body
    
    const result = await scheduleController.update(id, payload)
    return res.status(201).send(result)
})

scheduleeRouter.post('/', validateResource(createScheduleSchema), async (req: Request<{},CreateScheduleInput["body"]>, res: Response) => {
    const payload:CreateScheduleDTO = req.body

    const result = await scheduleController.create(payload)
    return res.status(201).send(result)
})

scheduleeRouter.get('/', async (req: Request, res: Response) => {
    const results = await scheduleController.getAll();
    return res.status(200).send(results)
})

export default scheduleeRouter;