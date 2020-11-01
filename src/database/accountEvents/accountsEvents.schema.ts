import { Schema } from 'mongoose';
import { Bank, EventType } from '../../models/models';
import { insertEvent, getBalance } from './accountsEvents.statics';

const AccountEventSchema = new Schema({
  AccountId: Number,
  eventType: Number,
  eventDate: {
    type: Date,
    default: new Date(),
  },
  amount: Number,
});

AccountEventSchema.statics.insertEvent = insertEvent;
AccountEventSchema.statics.getBalance = getBalance;

export default AccountEventSchema;
