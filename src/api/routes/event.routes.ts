import { Router, Request, Response } from "express";
import * as controller from "../controllers/event.controller";
import { CreateEventDTO, UpdateEventDTO } from "../dto/event.dto";
import validateResource from "../../middleware/validateResource";
import {
  CreateInput,
  UpdateInput,
  createScheme,
  updateSchema,
} from "../../schema/event.schema";

const _router = Router();

_router.get("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const result = await controller.getById(id);
    return res.status(200).send(result);
  } catch (error: any) {
    return res.status(404).send("No Data Found");
  }
});

_router.put(
  "/:Id",
  validateResource(updateSchema),
  async (req: Request<UpdateInput["params"]>, res: Response) => {
    const id = Number(req.params.Id);
    const payload: UpdateEventDTO = req.body;

    try {
      const result = await controller.update(id, payload);
      return res.status(201).send(result);
    } catch (error: any) {
      return res.status(400).send("Data not updated");
    }
  }
);

_router.post(
  "/",
  validateResource(createScheme),
  async (req: Request<CreateInput["body"]>, res: Response) => {
    const payload: CreateEventDTO = req.body;
    try {
      const result = await controller.create(payload).then((result) => {
        return res.status(200).send(result);
      })
      .catch((error) => {
        return res.status(400).send("Data not created");
      })
    } catch (error: any) {
      return res.status(400).send("Data not created");
    }
  }
);

_router.get("/", async (req: Request, res: Response) => {
  try {
    const results = await controller.getAll();
    return res.status(200).send(results);
  } catch (error: any) {
    return res.status(404).send("Data not found");
  }
});

_router.post("/count", async (req: Request, res: Response) => {
  try {
    const result = await controller.getCount();
    return res.json(result);
  } catch (error: any) {
    return res.status(400).send("getCount - No data found - " + error);
  }
});

export default _router;
