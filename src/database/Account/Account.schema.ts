import * as Mongoose from 'mongoose';
import { APIError, HTTPStatus } from '../../error/error';
import { createAccount } from './Account.statics';

const AccountSchema = new Mongoose.Schema({
  bank: {type: Number, unique: true},
  name: String,
  balance: Number,
  savingsBalance: Number,
},{ emitIndexErrors: true });

const handleDuplicates = (error: any, res:any, next:any) =>  {
  if (error.name === 'MongoError' && error.code === 11000)
    console.log("handle duplicates");
    throw new APIError(HTTPStatus.NotAcceptable, 'Account already exists.');
};

AccountSchema.post('save', handleDuplicates);

AccountSchema.statics.createAccount = createAccount;

export default AccountSchema;
