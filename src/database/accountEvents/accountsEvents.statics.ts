import { EventType, Account, Bank } from '../..//models/models';
import { AccountModel } from '../Account/Account.model';
import {
  IAccountEvents,
  IAccountEventsDocument,
  IAccountEventsModel,
} from './accountsEvents.types';

export async function insertEvent(
  this: IAccountEventsModel,
  ev: IAccountEvents
): Promise<IAccountEventsDocument> {
  if(ev.eventType === EventType.OPEN){
      await AccountModel.createAccount({bank: ev.accountId,bankName:Bank[ev.accountId], balance: ev.amount, savingsBalance:0 });
  }
  console.log("created account event - return it");
  return this.create(ev);
}

export async function getBalance(
  this: IAccountEventsModel,
  id: number,
) : Promise<any>{
  const ev =  await this.find({AccountId: id})
  return hydrate(ev);
}

export async function getPatrimony(
  this: IAccountEventsModel,
  id: number,
) : Promise<any>{

  const ev =  await this.find({AccountId: id})
  return hydrate(ev);
}

const hydrate = (evs: IAccountEventsDocument[]) : Account => {

  let balance = 0;
  evs.forEach( e => {
    switch (e.eventType){
      case EventType.ADD: balance += e.amount; break;
      case EventType.WiTHDRAW: balance -= e.amount; break;
      case EventType.OPEN: balance = e.amount; break;
      case EventType.TRANSFER: balance -= e.amount; break
    }
  })
  return {
    Entity: 1,
    Balance: balance,
    Savings: 0
  }
}