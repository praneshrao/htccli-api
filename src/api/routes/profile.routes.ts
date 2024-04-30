import { Router, Request, Response} from 'express'
import * as profileController from "../controllers/profile.controller";
import { CreateProfileDTO, UpdateProfileDTO } from '../dto/profile.dto';
import validateResource from '../../middleware/validateResource';
import { CreateProfileInput, UpdateProfileInput, createProfileSchema, updateProfileSchema } from '../../schema/profile.schema';
import requireUser from '../../middleware/requireUser';

const profileRouter = Router();

profileRouter.get('/:id',  requireUser, async (req:Request, res:Response) => {
    const id = Number(req.params.id);
    console.log("Profile Id - ", id)

    try {
        const result = await profileController.getById(id);
        return res.status(200).send(result);
    } catch(error: any) {
        return res.status(404).send("No Data Found");
    }
});

profileRouter.put('/:Id', requireUser, validateResource(updateProfileSchema), async (req: Request<UpdateProfileInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload:UpdateProfileDTO = req.body
    
    try {
        const result = await profileController.update(id, payload)
        return res.status(201).send("Profile updated successfully")
    } catch(error: any) {
        return res.status(400).send("Data not updated");
    }
 
})

profileRouter.post('/', requireUser, validateResource(createProfileSchema), async (req: Request<CreateProfileInput["body"]>, res: Response) => {
    const payload:CreateProfileDTO = req.body
    try {
        const result = await profileController.create(payload)
        return res.status(200).send("Profile created successfully")
    } catch(error: any) {
        return res.status(400).send("Data not created");
    }

})

profileRouter.get('/', requireUser, async (req: Request, res: Response) => {
    try {
        const results = await profileController.getAll();
        return res.status(200).send(results)
    } catch(error: any) {
        return res.status(404).send("Data not found");
    }

})

export default profileRouter;