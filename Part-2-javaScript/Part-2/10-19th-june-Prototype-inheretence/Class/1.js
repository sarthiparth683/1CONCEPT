
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    canSleep() {
        return `${this.name} is sleeping.`;
    };
    static greet() {
        return "Hello there!";
    };
};
// let p1 = new Person("John", 12);
// console.log(p1);
// console.log(p1.canSleep()); 
// console.log(Person.greet()); 
//--------------------------------------------------------------
class Employee extends Person {
    #salary
    constructor(name, age, salary = 0) {
        super(name, age);
        this.#salary = salary;
    };
    get salary() {
        return this.#salary;
    };
    set salary(value) {
        if (value > 0) {
            this.#salary = value
        } else {
            console.log("Salary must be a positive number.")
        }
    };
    working() {
        return `${this.name} is working.`;
    };
};
// let e1 = new Employee("Achiles", 25, 300);
// console.log(e1);
// e1.salary = 44000;
// console.log(e1.salary); 
// console.log(e1.working());
//--------------------------------------------------------------------
class Manager extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary);
    };
    managing() {
        return ` ${this.name}  is managing`;
    };
    static getRole() {
        return "Manager";
    };

};
// let m1 = new Manager("Rocky", 24, 9878);
// console.log(m1);
// console.log(m1.managing()); // inside prototype
// console.log(Manager.getRole()) // getRole is inside constructor 
// console.log(m1.getRole());// throws error because static need Name Manager
//---------------------------------------------------------------------------
class Executive extends Manager {
    #bonus
    constructor(name, age, salary = 0, bonus = 0) {
        super(name, age, salary);
        this.#bonus = bonus;
    };
    get bonus() {
        return this.#bonus;
    };
    set bonus(value) {
        if (value > 0) {
            return this.#bonus = value;
        }
    };
};
let e2 = new Executive("Aman", 24, 987111, 101);
console.log(e2); // get and set is inside prototype
console.log("initital value in get -", e2.bonus);//get
e2.bonus = 5000; //set  update
console.log("upsdated value in set -", e2.bonus); // conclusion get and set is used for updating value
