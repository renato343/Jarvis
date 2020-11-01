import { Model, Document } from 'mongoose';
import { EventType, Account } from '../../models/models';

export interface IAccountEvents {
  AccountId: number;
  eventType: EventType;
  eventDate: Date;
  amount: number;
}

export interface IAccountEventsDocument extends IAccountEvents, Document {}

export interface IAccountEventsModel extends Model<IAccountEventsDocument> {
  insertEvent: (
    this: IAccountEventsModel,
    ev: IAccountEvents
  ) => Promise<IAccountEventsDocument>;

  getBalance(
    this: IAccountEventsModel,
    id: number,
  ) : Promise<Account>;

  getPatrimony(
    this: IAccountEventsModel,
    id: number,
  ) : Promise<Account[]>;
}
