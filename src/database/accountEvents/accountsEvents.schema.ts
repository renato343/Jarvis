import { Schema } from 'mongoose';
import { insertEvent, getBalance } from './accountsEvents.statics';

const AccountEventSchema = new Schema({
  accountId: Number,
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
