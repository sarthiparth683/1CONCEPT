
function mapChar(N) {
    let obj = {};
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < N; i++) {
        obj[alphabets[i]] = i + 1;
    }
    for (let key in obj) {
        console.log(key + "-" + obj[key])
    }
};
mapChar(5); 
//----------------------------------------------------------------
var person = {
  name: "Alice",
  age: 30,

  sayArrowHello: () => {
    console.log("Arrow Hello ");
  },

  sayRegularHello: function () {
    console.log("Regular Hello ");
  },

  sayRegularName: function () {
    console.log("My Regular name is ", this.name);
    this.sayRegularHello();
    this.sayArrowHello();
    var sayArrowGoodbye = () => {
      console.log("Arrow Goodbye ");
    };
    sayArrowGoodbye();
  },
};
// console.log(person.name);
// console.log(person.age);
// person.sayArrowHello()
// person.sayRegularHello()
// person.sayRegularName();