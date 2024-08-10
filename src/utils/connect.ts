import { Sequelize } from "sequelize";
import config from "config";
import dotenv  from "dotenv"
import logger from "./logger"

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

/* const db = new Sequelize(
    config.get<string>('dbDatabase'),
    config.get<string>('dbUserName'),
    config.get<string>('dbPassword'),
    {
        host: config.get<string>('dbHost'),
        port: config.get<number>('dbPort'),
        dialect: "mssql",
    }
) */

let database = String(process.env.DB_DATABASE)
let userName = String(process.env.DB_USERNAME)
let password = String(process.env.DB_PASSWORD)
let dbHost = String(process.env.DB_HOST)
let dbPort = Number(process.env.DB_PORT)

const db = new Sequelize(
    database, userName, password, 
    {
        host: dbHost,
        port: dbPort,
        dialect: "mssql",
        logging: sql => logger.info(sql), 
    }
)

export default db;