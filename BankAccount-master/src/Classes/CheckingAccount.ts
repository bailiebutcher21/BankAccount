import {AccountType} from '../Enums/AccountType';
import {Transaction} from "../Transaction";
import {Account} from '../Account';
import {TransactionOrigin} from "../Enums/TransactionOrigin";
import {displayClassName, displayClassNameWithPurpose} from "../Decorators";
import * as moment from 'moment';
@displayClassName



export class CheckingAccount implements Account, Transaction {

    constructor() {
        this.dateOpened = moment('2000-01-01');
    }

    currentDate: any;
    dateOpened: any;
    errorMessage: string;
    transactionDate: Date;
    description: string;
    amount: number;
    success: boolean;
    resultBalance: number;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 1000;
    accountType: AccountType;
    accountHistory: Transaction[];


    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 1;
        if (transactionOrigin == TransactionOrigin.branch || TransactionOrigin.phone || TransactionOrigin.web) {
            this.amount = amount;

            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Transaction declined, cannot withdraw more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }

            return;
        }
    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();

        return;
    }

    advanceDate(numberOfDays: number) {
        let countingDate = this.dateOpened;
        let i = 0;
        while (i < numberOfDays) {
            countingDate.add(1, 'days');
            i++;
            if (countingDate.date() === 1) {
                let interest = (this.balance * 0.01) / 12;
                this.balance += interest;

            }
        }
        return this.balance;
    }
}














// loop as many numberOfDays
// add 1 day to dateOpened (use moment.js) : moment.add(1, 'day')
// if is this.dateOpened day of month == 1 : moment.date()
// calculate interest and assign to this.balance


