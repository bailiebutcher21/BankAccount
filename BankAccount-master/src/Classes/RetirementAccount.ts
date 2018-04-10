import {AccountType} from '../Enums/AccountType';
import {Transaction} from '../Transaction';
import {Account} from '../Account';
import {TransactionOrigin} from '../Enums/TransactionOrigin';
import {displayClassName, displayClassNameWithPurpose} from '../Decorators';
import * as moment from 'moment';

export class RetirementAccount implements Account, Transaction {

    constructor() {
        this.dateOpened = moment('2000-01-01');
    }

    currentDate:any;
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 100000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: any;
    monthlyTransaction: number = 6;
    userAge: number = 64;
    earlyWithdrawl: number = (this.balance * .1);

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

        let currentBalance = this.balance;
        this.accountType = 3;
        this.amount = amount;

        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if (this.monthlyTransaction >= 1) {
                if (amount > currentBalance) {
                    this.success = false;
                    this.errorMessage = "message";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    if (this.userAge <= 65) {
                        this.balance -= this.earlyWithdrawl;
                        this.success = true;
                        this.errorMessage = "";
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransaction--;
                    }
                    else {
                        this.success = true;
                        this.errorMessage = "";
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransaction--;
                    }
                }
            }
            else {
                this.errorMessage = "Sorry, the number of transactions exceed the federal limits";

            }
        }
        else {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "Transaction declined, cannot withdraw more than the available balance.";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();

            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }
        }
        return;
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
                let interest = (this.balance * 0.03) / 12;
                this.balance += interest;

            }
        }
        return this.balance;
    }
}

