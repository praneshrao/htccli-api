import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
//import routes from "./routes";
import swaggerDocs from "./utils/swagger";
import { startMetricsServer } from "./utils/metrics";
import  deserializeUser from "./middleware/deserializeUser";
import routes from "./api/routes";

const port = config.get<number>('serverPort');
const app = express();

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
    
      //startMetricsServer();

      swaggerDocs(app, port);

});