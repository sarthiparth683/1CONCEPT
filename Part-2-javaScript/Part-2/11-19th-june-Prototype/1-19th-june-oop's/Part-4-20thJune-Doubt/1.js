//Method 1, using object and Object.create
// let dad = {
//     height :">6ft",
//     color : "Brownish Black",
//     hairColor : "Grayish White"
// };
// //we are creating a copy of obj dad,then we added another key called, as name in the copied object..
// let son = Object.create(dad);
// son.name = "John";
// console.log("dad-",dad);
// console.log("son-",son); // here dad's property is saved in prototype of son's object
//----------------------------------------------------------------------------------

//Method 2, using constructor function and .call
// function Dad1() {
//   this.height = ">6ft";
//   this.color = "Brownish Black";
//   this.hairColor = "Grayish White";
// };
// function Son1(name) {
//   Dad1.call(this);//.call attaches son's object to dad's object hence we get all properties of dad obj to son obj
//   this.name = name;
// }
// // let dad1 = new Dad1;
// // console.log("Dad-1",dad1);
//  let son11 = new Son1("John");
//  console.log("son11",son11);
// console.log(new Son1());
//------------------------------------------------------------------------------------------
// Example of constructor
// function Dad() {
//   this.height = ">6ft";
//   this.color = "Brownish Black";
//   this.hairColor = "Grayish White";
//   this.behaviour1 = function(){
//     console.log("He is angry in nature");
//   };
// };
// Dad.prototype.behaviour2 = function(){
//        return "He is angry in nature"
// };
// Dad.prototype.bloodgrp = function(){
//     return "B+ve"
// };
// let dad1 = new Dad();
// console.log("dad-1",dad1);

// function Son(name) {
//    Dad.call(this);//.call attaches son's object to dad's objecthence we get all properties of dad obj to son obj
//   //Dad.apply(this);
//   //Dad.bind(this);
//   this.name = name;
// };
// // Object.setPrototypeOf(Son.prototype,Dad.prototype);
// Son.prototype = Dad.prototype;
// let son1 = new Son("John");
// console.log("son-1",son1);
//----------------------------------------------------------------
//Classes 
// class Dad{
//    constructor(){
//       this.height = ">6ft";
//       this.color = "Brownish Black";
//       this.hairColor = "Grayish White";
//      this.behaviour3 = function(){
//         return `He is angry in nature-3`
//        };
//    };
//    behaviour(){
//     return `He is angry in nature`
//    };
//    behaviour2(){
//     return `He is angry in nature-2`
//    };
// };
// class Son extends Dad{
//     constructor(name){
//         super()
//         this.name = name
//     };
// };
// let dad = new Dad;
// console.log(dad);
// let son1 = new Son("James");
// console.log(son1);
// console.log("from son", son1.behaviour());
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