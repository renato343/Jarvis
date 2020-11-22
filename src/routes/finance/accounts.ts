import { Router } from 'express';
import { AccountEventsModel } from '../../database/accountEvents/accountsEvents.model';

const accountRouter = Router();

accountRouter.post('/insert', async (req, res, next) => {
try{
  const resp = await AccountEventsModel.insertEvent(req.body);
  res.send(resp);
}
 catch (err) {
  console.log("in catch");
  next(err)
}
});

accountRouter.get('/balance/:id', async (req, res) => {
  const balance = await AccountEventsModel.getBalance(Number(req.params.id));
  res.send({balance});
});

accountRouter.get('/patrimony', async (req, res) => {
  const balance = await AccountEventsModel.getPatrimony(1);
  res.send({balance});
});

accountRouter.get('/getbank', (req, res) => {
  res.send('SheetRouter - getBank');
});

export default accountRouter;
