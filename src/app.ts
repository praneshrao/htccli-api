import express from "express";
import dotenv  from "dotenv"
import helmet from "helmet";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import swaggerDocs from "./utils/swagger";
import { startMetricsServer } from "./utils/metrics";
import  deserializeUser from "./middleware/deserializeUser";
import routes from "./api/routes";
import cors from "cors";
import ErrorHandler from "./middleware/errorHandler";

//const port = config.get<number>('serverPort');
const app = express();

if(process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const port = Number(process.env.SERVER_PORT);

//use helmet
app.use(helmet());

// Define the CORS options
const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(deserializeUser);

app.use(express.urlencoded({ extended: true}));

app.listen(port, async () => {
    logger.info('App is running at http://loclhost:${port}');
    logger.info(port);

    try {
        await connect.authenticate();
        logger.info("Connection has been established successfully.")
      } catch (error) {
        logger.error('Unable to connect to the database:', error)
      }

      //routes(app);
  
      app.use('/api/v1', routes)

      app.all('*', (req, res, next) => {
        const err: any = new Error(`Can't find ${req.originalUrl} on the server!`)
        err.status = "failed";
        err.statusCode = 404;
        next(err);
      });

      app.use(ErrorHandler)
    
      startMetricsServer();

      swaggerDocs(app, port);

});