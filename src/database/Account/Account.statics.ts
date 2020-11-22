import { APIError } from "../../error/error";
import { IAccountModel, IAccountDocument } from "./Account.types";

export async function createAccount(
  this: IAccountModel,
  {
    bank,name,balance, savingsBalance,
  }: { bank: number,name: string, balance: number, savingsBalance: number, }
): Promise<IAccountDocument> {
    const record = await this.create({bank, name, balance, savingsBalance });
    return record;
}