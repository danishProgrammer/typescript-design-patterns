// Encapsulation ==> Data Hiding, Protection of concerns.

//A demonstration of using encapsulation by using Bank Account example
// Deposit Money
// Withdrawal
// Balance ==> encapsulated and hidden from end user.

class BankAccount {
    private _balance:number;

    // Getter to get the balance of current account;
    public get balance():number{
        return this._balance;
    }

    constructor(initialBalance:number){
        this._balance = initialBalance;
    }
    public deposit(amount:number):void{
        if(amount < 0) {
            console.log("Invalid deposit amount");
            return;
        }
        this._balance += amount;
    }
    public withdrawal(amount:number):void{
        if(amount < 0) {
            console.log("Invalid Withdrawal amount");
            return;
        }
        if((this._balance - amount) < 0) {
            console.log("Insufficient funds");
            return;
        }
        this._balance -= amount;
    }

}

const myBankAccount = new BankAccount(5000);
myBankAccount.deposit(500);
myBankAccount.withdrawal(300);
console.log("Current Balance",myBankAccount.balance);

/* Advantages of using Encapsulation.

Data Hiding: Prevent unauthorized access and misuse.
Control Over Data: Provides control over data validation and integrity
Flexibility & Extensibility
Reusability & Maintainability

*/