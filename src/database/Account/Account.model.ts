import * as Mongoose from 'mongoose';
import AccountSchema from './Account.schema';
import { IAccountDocument, IAccountModel } from './Account.types';

export const AccountModel = Mongoose.model<IAccountDocument>(
  "Account",
  AccountSchema
  ) as IAccountModel;
