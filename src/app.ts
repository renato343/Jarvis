import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import { errorHandler } from './error/error';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.use(errorHandler);

export default app;

