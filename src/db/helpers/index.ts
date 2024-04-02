import { Model, ModelStatic, col, fn } from "sequelize";
import { v4 as uuidv4 } from 'uuid';
import logger from "../../utils/logger";

export async function getById<T extends Model>(id: number, model: ModelStatic<T>): Promise<T> {
    const result = await model.findByPk(id);
    if (!result) {
        logger.error("No data found");
        throw new Error("No data found");
    }
    return result;
}

export async function getAll<T extends Model>(model: ModelStatic<T>): Promise<T[]> {
    const result = await model.findAll();
    if (!result) {
        throw new Error("No data found");
    }
    return result;
}

export async function create<T extends Model>(model: ModelStatic<T>, payload: any) : Promise<T> {
    return await model.create(payload);
}

export async function update<T extends Model>(id: number, model: ModelStatic<T>, payload: any): Promise<T> {
    const result = await model.findByPk(id);
    if (!result) {
        throw new Error('No Data Found');
    }
    return result.update(payload);
}

export async function getNextId<T extends Model>(model: ModelStatic<T>) {
    return await model.findAll({
        attributes: [
            [fn('MAX', col('Id')), 'Id'],
        ],
        raw: true,
    }).then(function(result: any) {
        return result;
    });
}

export async function getNextUUID() {
    const Id = uuidv4();
    return Id;
}