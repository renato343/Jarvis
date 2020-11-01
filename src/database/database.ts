import Mongoose from 'mongoose';
import { UserModel } from './users/users.model';
import { AccountEventsModel } from './accountEvents/accountsEvents.model';

let database: Mongoose.Connection;

export const connect = (databaseName: string) => {
  // add your own uri below
  const uri = `mongodb://localhost:27017/${databaseName}`;
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });

  return {
    UserModel,
    AccountEventsModel,
  }
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
