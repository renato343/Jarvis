import express from 'express';
import config from './config/appConfig';
import { connect, disconnect } from './database/database';
import routes from './routes';

const startServer = async () => {
  try {
    const app = express();

    app.use(routes);

    // connecto to MongoDb
    connect();

    const listener: any = app.listen(config.port, () =>
      console.log(`Listening on port: ${listener.address().port}`)
    );
  } catch (error) {
    disconnect();
    console.log('startup error', error);
  }
};

startServer();
