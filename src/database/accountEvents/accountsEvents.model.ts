import * as Mongoose from 'mongoose';
import AccountEventSchema from './accountsEvents.schema';

import { IAccountEventsDocument, IAccountEventsModel } from './accountsEvents.types';

export const AccountEventsModel = Mongoose.model<IAccountEventsDocument>(
  'AccountEvents',
  AccountEventSchema
)as IAccountEventsModel;
