import {CheckingAccount} from "./CheckingAccount";
import {SavingsAccount} from "./SavingsAccount";
import {RetirementAccount} from "./RetirementAccount";
import {AccountType} from "../Enums/AccountType";

export class Person {
    name: string;
    dateOfBirth: Date;
    checkingBalance: number;
    savingsBalance: number;
    retirementBalance: number;

    constructor(){
        this.name = name;
        this.dateOfBirth = new Date(1994, 5 , 2);
        this.checkingBalance = 1000;
        this.savingsBalance = 10000;
        this.retirementBalance = 100000;

    }

    checking = new CheckingAccount();

    savings = new SavingsAccount();

    retirement = new RetirementAccount();

}