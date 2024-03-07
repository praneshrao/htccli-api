import { Router, Request, Response} from 'express'
import * as profileController from "../controllers/profile.controller";
import { CreateProfileDTO, UpdateProfileDTO } from '../dto/profile.dto';
import validateResource from '../../middleware/validateResource';
import { CreateProfileInput, UpdateProfileInput, createProfileSchema, updateProfileSchema } from '../../schema/profile.schema';

const profileRouter = Router();

profileRouter.get('/:id',  async (req:Request, res:Response) => {
    const id = Number(req.params.id);

    const result = await profileController.getById(id);
    return res.status(200).send(result);
});

profileRouter.put('/:Id', validateResource(updateProfileSchema), async (req: Request<UpdateProfileInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateProfileDTO = req.body
    
    const result = await profileController.update(id, payload)
    return res.status(201).send(result)
})

profileRouter.post('/', validateResource(createProfileSchema), async (req: Request<CreateProfileInput["body"]>, res: Response) => {
    const payload:CreateProfileDTO = req.body

    const result = await profileController.create(payload)
    return res.status(200).send(result)
})

profileRouter.get('/', async (req: Request, res: Response) => {
    const results = await profileController.getAll();
    return res.status(200).send(results)
})

export default profileRouter;