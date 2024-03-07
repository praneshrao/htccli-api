import { Model, Sequelize } from "sequelize";
import { IBaseRepository } from "../interfaces/IBaseRepository.interface";
import logger from "../../utils/logger";
import connect from "../../utils/connect";

export abstract class BaseRepository<T> implements IBaseRepository<T>{

    private _model:any;
    private connection:any;
    private _sequelize:Sequelize;

    public get sequelize(){return this._sequelize };

    constructor(model:any){
       this._model = model;
       this._sequelize = connect;

       this._sequelize
        .authenticate().then(() => {
            logger.info("Connection has been established successfully.");
        })
        .catch(err => {
            logger.error('Unable to connect to the database:', err);
        });
    }
    Create(payload: T): T {
        return this._model(payload);
    }

    GetByID(id: number){
        const result = this._model.findByPk(id);
        if (!result) {
            throw new Error("No data found");
        }
        return result;
    }

   GetAll(){
    const result = this._model.findAll();
    if (!result) {
        throw new Error("No data found");
    }
    return result;
    }

    // Update the Active to true or false
    Delete(id: number, payload: T){
        const result = this._model.findByPk(id);
        if (!result) {
            throw new Error('No Data Found');
        }
        return result.update(payload);
    }

    Update(id: number, payload: T){
        const result = this._model.findByPk(id);
        if (!result) {
            throw new Error('No Data Found');
        }
        return result.update(payload);

    }

}