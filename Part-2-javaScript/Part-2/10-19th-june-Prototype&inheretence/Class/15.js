
//-------------------------------------------------------------------

/// Banking system
class CreateAccount {
    constructor(name, age, gender, mobileno, balance) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.mobileno = mobileno;
        this.accountNo = Math.floor(Math.random() * 1000000000);
        this.balance = balance;
    };
    withdraw(amt) {
        if (this.balance <= amt) {
            throw new Error("No sufficient amt")
        } else {
            this.balance -= amt;
            return `Amt withdrawn, your new balance is Rs.${this.balance}`
        };
    };
    deposit(amt) {
        this.balance += amt;
        return `Amt Deposited, your new balance is Rs.${this.balance}`
    };
    checkBalance() {
        return `The balance is Rs.${this.balance}`
    };
};
// let acc1 = new CreateAccount("Dinda",110,"male","78484",9999999);
// console.log(acc1);
//----------------------------------------------------
class JandhanAccount extends CreateAccount {
    constructor(name, age, gender, mobileno, balance, incomelimit) { //parents + children parameters
        super(name, age, gender, mobileno, balance); // only parent parameters
        this.creditLimit = 500000;
        this.incomelimit = incomelimit;
    };
    useCredit(amt) {
        if (this.creditLimit > amt) {
            this.creditLimit -= amt;
            return `Credit privided, available credit limit is ${this.creditLimit}`
        } else {
            throw new Error("No sufficient amt")
        };
    };
};
// let ch1 = new JandhanAccount("1","2","3","4","5","6");
// console.log("child-1",ch1);
//-----------------------------------------------
class LoanAccount extends CreateAccount {
    constructor(name, age, gender, mobileno, balance,loanAmt) {
        super(name, age, gender, mobileno,balance);// only parent parameters
        this.loanAmt = loanAmt
    };
};
let c1 = new CreateAccount("james", 24, "male", 12345678);//Parent
let c2 = new JandhanAccount("Jimmy", 32, "male", 987654321, 250000);//ch-1
let c3 = new LoanAccount("Achiles", 32, "male", 987654321, 250000,"6");
console.log("c-1", c1);
console.log("c-2", c2);
console.log("c-3", c3);
console.log(c2.useCredit(50000));