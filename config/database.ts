import { Sequelize } from "sequelize";
import config from "config";

const db = new Sequelize(
    config.get<string>('dbDatabase'),
    config.get<string>('dbUserName'),
    config.get<string>('dbPassword'),
    {
        host: config.get<string>('dbHost'),
        port: config.get<number>('dbPort'),
        dialect: "mssql"
    }
)

export default db;