import { UserModel } from '../users/users.model';
import { connect, disconnect } from '../database';
import { AccountEventsModel } from '../accountEvents/accountsEvents.model';
import { Bank, EventType } from '../../models/models';

(async () => {
  connect('events');
  console.log('connected to database');
  const events = [
    {
      AccountId: Bank.BPI,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 1,
    },
    {
      AccountId: Bank.BPI,
      eventType: EventType.WiTHDRAW,
      eventDate: Date.now(),
      amount: 1,
    },
    {
      AccountId: Bank.BPI,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 3,
    },
    {
      AccountId: Bank.BPI,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 7,
    },
    {
      AccountId: Bank.BPI,
      eventType: EventType.TRANSFER,
      eventDate: Date.now(),
      amount: 5,
    },
    {
      AccountId: Bank.BPI,
      eventType: EventType.WiTHDRAW,
      eventDate: Date.now(),
      amount: 20,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 1,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.WiTHDRAW,
      eventDate: Date.now(),
      amount: 1,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 3,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.ADD,
      eventDate: Date.now(),
      amount: 7,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.TRANSFER,
      eventDate: Date.now(),
      amount: 5,
    },
    {
      AccountId: Bank.CGD,
      eventType: EventType.WiTHDRAW,
      eventDate: Date.now(),
      amount: 5,
    },
  ];
  try {
    for (const ev of events) {
      await AccountEventsModel.create(ev);
      console.log(`Created Event ${ev.AccountId} ${ev.eventType}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();
