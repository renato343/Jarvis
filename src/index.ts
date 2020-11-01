import express from 'express';
import config from './config/appConfig';
import { connect, disconnect } from './database/database';
import bodyParser from 'body-parser';
import routes from './routes';

const startServer = async () => {
  try {
    const app = express();

    // Connect to Mongo
    connect('events');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(routes);

    const listener: any = app.listen(config.port, () =>
      console.log(`Listening on port: ${listener.address().port}`)
    );
  } catch (error) {
    console.log('startup error', error);
  }
};

startServer();
