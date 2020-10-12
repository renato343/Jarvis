import { Router } from 'express';
import { getBalance } from '../../utils/google/google';

const sheetRouter = Router();

sheetRouter.get('/getbalance', async (req: any, res) => {
  const resp = await getBalance();
  res.send(resp);
});

sheetRouter.get('/getbank', (req: any, res) => {
  res.send('SheetRouter - getBank');
});

export default sheetRouter;
