import { Router } from 'express';
import sheetRouter from './finance/sheet';

const routes = Router();

routes.use('/finance', sheetRouter);

export default routes;
