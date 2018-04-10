import {RetirementAccount} from "./Classes/RetirementAccount";
import {SavingsAccount} from "./Classes/SavingsAccount";
import {CheckingAccount} from "./Classes/CheckingAccount";

let checking = new CheckingAccount();

let savings = new SavingsAccount();

let retirement = new RetirementAccount();

//calculate interest using Math ()

//savings account tests

console.log (savings.withdrawMoney(10000, "Mexico", 2));

console.log (savings.success);
console.log (checking.success);