export interface Balance {
  bank1: Bank;
  bank2: Bank;
  date: Date;
}

export interface Bank {
  name: string;
  balance: number;
}
