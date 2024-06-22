
// Example of constructor
function Dad() {
    this.height = ">6ft";
    this.color = "Brownish Black";
    this.hairColor = "Grayish White";
    this.behaviour1 = function(){
      console.log("He is angry in nature");
    };
  };
  Dad.prototype.behaviour2 = function(){
         return "He is angry in nature"
  };
  Dad.prototype.bloodgrp = function(){
      return "B+ve"
  };
  let dad1 = new Dad();
  console.log("dad-1",dad1);
  
  function Son(name) {
     Dad.call(this);//.call attaches son's object to dad's objecthence we get all properties of dad obj to son obj
    //Dad.apply(this);
    //Dad.bind(this);
    this.name = name;
  };
  // Object.setPrototypeOf(Son.prototype,Dad.prototype);
  Son.prototype = Dad.prototype;
  let son1 = new Son("John");
  console.log("son-1",son1);