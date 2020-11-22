import { Document, Model } from 'mongoose';

export interface IAccount {
  bank: number,
  name: string,
  balance: number,
  savingsBalance: number,
}

export interface IAccountDocument extends IAccount, Document {
}

export interface IAccountModel extends Model<IAccountDocument> {
  createAccount: (
    this: IAccountModel,
    {
      bank,
      bankName,
      balance,
      savingsBalance,

    }: {
      bank: number,
      bankName: string,
      balance: number,
      savingsBalance: number, }
  ) => Promise<IAccountDocument>;
}
