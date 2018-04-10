import {AccountType} from "./Enums/AccountType";
import {TransactionOrigin} from "./Enums/TransactionOrigin";
import {Transaction} from "./Transaction";


export interface Account {
    currentDate: Date;
    dateOpened: Date;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin) : Transaction;
    depositMoney(amount: number,
    description: string) : Transaction;
    accountHistory : Transaction[];
    advanceDate(numberOfDays: number);
    accountType: AccountType;
}








