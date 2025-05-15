// Banking system
class CreateAccount {
  constructor(name, age, gender, mobileno, balance) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.mobileno = mobileno;
    this.accountNo = Math.floor(Math.random() * 1000000000);
    this.balance = balance;
  }
  withdraw(amt) {
    if (this.balance <= amt) {
      throw new Error("No sufficient amt");
    } else {
      this.balance -= amt;
      return `Amt withdrawn, your new balance is Rs.${this.balance}`;
    }
  }
  deposit(amt) {
    this.balance += amt;
    return `Amt Deposited, your new balance is Rs.${this.balance}`;
  }
  checkBalance() {
    return `The balance is Rs.${this.balance}`;
  }
}
let acc1 = new CreateAccount("Sarthi", 110, "male", "78484", 900);
// console.log(acc1);
// console.log(acc1.name);
// console.log(acc1.balance);
// console.log(acc1.deposit(50))
// console.log(acc1.withdraw(15))
// console.log(acc1.checkBalance());
//----------------------------------------------------
class JandhanAccount extends CreateAccount {
  constructor(name, age, gender, mobileno, balance, incomelimit) {
    //parents + children parameters
    super(name, age, gender, mobileno, balance); // only parent parameters
    this.creditLimit = 900;
    this.incomelimit = incomelimit;
  }
  useCredit(amt) {
    if (this.creditLimit > amt) {
      this.creditLimit -= amt;
      return `Credit privided, available credit limit is ${this.creditLimit}`;
    } else {
      throw new Error("No sufficient amt");
    }
  }
}
let ch1 = new JandhanAccount("John", 110, "male", "78484", 900, 950);
// console.log(ch1)
// console.log(ch1.name);
// console.log(ch1.incomelimit);
// console.log(ch1.useCredit(45));
//------------------------------------------------------------------------
class LoanAccount extends CreateAccount {
  constructor(name, age, gender, mobileno, balance, loanAmt) {
    super(name, age, gender, mobileno, balance); // only parent parameters
    this.loanAmt = loanAmt;
  }
}
let c1 = new CreateAccount("james", 24, "male", 12345678); //Parent
let c2 = new JandhanAccount("Jimmy", 32, "male", 987654321, 250000); //ch-1
let c3 = new LoanAccount("Achiles", 32, "male", 987654321, 250000, "6");
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c2.useCredit(50));
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
// Getters and setters are special methods defined within a class. Getters retrieve the value of a property, while setters modify the value of a property.
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0 && newAge < 150) {
      this._age = newAge;
    } else {
      console.log("Invalid age value.");
    }
  }
}

let user1 = new User("Sarthi", 30);
// console.log(user1.name);
// console.log(user1.age);

// user1.age = 45;  // setting value
// // user1.age(55) // function calling will not work
// console.log(user1.age); // getting value

// user1.age = 200; // Invalid age value.
// console.log(user1.age); // Output: 40 (unchanged)
//-----------------------------------------------------------------------
