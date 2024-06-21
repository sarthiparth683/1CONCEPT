//Method 1, using object and Object.create
// let dad = {
//     height :">6ft",
//     color : "Brownish Black",
//     hairColor : "Grayish White"
// }
// /// we are creating a copy of obj dad, 
// //then we added another key called, as name in the copied object
// let son = Object.create(dad)
// son.name = "John";
// console.log(son)


//Method 2, using constructor function and .call
// function Dad() {
//   this.height = ">6ft";
//   this.color = "Brownish Black";
//   this.hairColor = "Grayish White";
// }

// function Son(name) {
// //.call attaches/links son's object to dad's object
// // hence we get all properties of dad obj to son obj
//   Dad.call(this);
//   this.name = name;
// }
// let son1 = new Son("John");
// console.log(son1);

/// Next one
// function Dad() {
//   this.height = ">6ft";
//   this.color = "Brownish Black";
//   this.hairColor = "Grayish White";
// //   this.behaviour = function(){
// //     console.log("He is angry in nature")
// //   }
// }

// Dad.prototype.behaviour = function(){
//        return "He is angry in nature"
// }
// Dad.prototype.bloodgrp = function(){
//     return "B+ve"
// }

// let dad1 = new Dad()
// console.log(dad1)

// function Son(name) {
// //.call attaches/links son's object to dad's object
// // hence we get all properties of dad obj to son obj
//   Dad.call(this);
//   this.name = name;
// }
// //Object.setPrototypeOf(Son.prototype,Dad.prototype)
// Son.prototype = Dad.prototype
// let son1 = new Son("John");

// console.log(son1);

//Classes 
// function Dad() {
//   this.height = ">6ft";
//   this.color = "Brownish Black";
//   this.hairColor = "Grayish White";
// //   this.behaviour = function(){
// //     console.log("He is angry in nature")
// //   }
// }
// class Dad{
//    constructor(){
//       this.height = ">6ft";
//       this.color = "Brownish Black";
//       this.hairColor = "Grayish White";
//    }

//    behaviour(){
//     return `He is angry in nature`
//    }
// }

// class Son extends Dad{
//     constructor(name){
//         super()
//         this.name = name
//     }
// }

// let dad = new Dad
// console.log(dad)

// let son1 = new Son("James")
// console.log(son1)
// console.log("from son", son1.behaviour())

/// Banking system

class CreateAccount{
    constructor(name,age,gender,mobileno){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.mobileno=mobileno;
        this.accountNo = Math.floor(Math.random()*1000000000)
        this.balance = 0
    }

    withdraw(amt){
        if(this.balance<=amt){
            throw new Error("No sufficient amt")
        }else{
            this.balance-= amt;
            return `Amt withdrawn, your new balance is Rs.${this.balance}`
        }
    }

    deposit(amt){
        this.balance+=amt;
        return `Amt Deposited, your new balance is Rs.${this.balance}`
    }

    checkBalance(){
        return `The balance is Rs.${this.balance}` 
    }
}

class JandhanAccount extends CreateAccount{
    constructor(name,age,gender,mobileno,incomelimit){
        super(name,age,gender,mobileno)
            this.creditLimit = 500000;
            this.incomelimit = incomelimit
    }
    
    useCredit(amt){
        if(this.creditLimit>amt){
            this.creditLimit-= amt;
            return `Credit privided, available credit limit is ${this.creditLimit}`
            
        }else{
            throw new Error("No sufficient amt")
        }
    }

    
}

class LoanAccount extends CreateAccount{
    constructor(name,age,gender,mobileno,loanAmt){
        super(name,age,gender,mobileno)
        this.loanAmt = loanAmt
        
    }
}

let c1 = new CreateAccount("james",24,"male",12345678)

let c2 = new JandhanAccount("Jimmy",32,"male",987654321,250000)
console.log(c2.useCredit(50000))

