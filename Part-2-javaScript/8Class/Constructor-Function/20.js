//Method 2, using constructor function and .call
function Dad1() {
    this.height = ">6ft";
    this.color = "Brownish Black";
    this.hairColor = "Grayish White";
  };
  function Son1(name) {
    Dad1.call(this);//.call attaches son's object to dad's object hence we get all properties of dad obj to son obj
    this.name = name;
  }
  // let dad1 = new Dad1;
  // console.log("Dad-1",dad1);
   let son11 = new Son1("John");
   console.log("son11",son11);
  console.log(new Son1());