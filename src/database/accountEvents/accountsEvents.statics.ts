import { EventType, Account } from '../..//models/models';
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
    console.log('create account');
  }
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