export interface IBaseRepository<T>{
    GetByID(id: number): T;
    GetAll() : T[];
    Create(model : T): T;
    Delete(id : number, model: T) : T;
    Update(id:number ,model : T): T;
}