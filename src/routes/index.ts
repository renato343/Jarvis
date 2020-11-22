import { Router } from 'express';
import accountRouter from './finance/accounts';
import sheetRouter from './finance/sheet';

const routes = Router();

routes.use('/finance', sheetRouter);
routes.use('/accounts', accountRouter);

export default routes;
