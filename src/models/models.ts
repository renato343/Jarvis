export enum Bank {
  CGD,
  BPI,
  REVOLUT,
}

export enum EventType {
  OPEN,
  TRANSFER,
  ADD,
  WiTHDRAW,
}

export type Account = {
  Entity: Bank,
  Balance: number,
  Savings: number
}