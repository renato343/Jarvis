import { Router } from 'express';
import { AccountEventsModel } from '../../database/accountEvents/accountsEvents.model';

const accountEventsRouter = Router();

accountEventsRouter.post('/open', async (req, res) => {
  AccountEventsModel.insertEvent(req.body);
   res.send(res);
});

accountEventsRouter.post('/insert', async (req, res) => {
  AccountEventsModel.insertEvent(req.body);
   res.send(res);
});

accountEventsRouter.get('/balance/:id', async (req, res) => {
  const balance = await AccountEventsModel.getBalance(Number(req.params.id));
  res.send({balance});
});

accountEventsRouter.get('/patrimony', async (req, res) => {
  const balance = await AccountEventsModel.getPatrimony(1);
  res.send({balance});
});

accountEventsRouter.get('/getbank', (req, res) => {
  res.send('SheetRouter - getBank');
});

export default accountEventsRouter;
