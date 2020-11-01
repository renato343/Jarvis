import { Router } from 'express';
import accountEventsRouter from './finance/events';
import sheetRouter from './finance/sheet';

const routes = Router();

routes.use('/finance', sheetRouter);
routes.use('/accounts', accountEventsRouter);

export default routes;
