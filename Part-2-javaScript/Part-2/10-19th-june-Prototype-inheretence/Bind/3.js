function sayHello() {
    console.log("Hello! ", this, this.name);
  }
  
  var John = {
    name: "John Doe",
    age: 30
  };
  
  var johnSayHello = sayHello.bind(John);
  
  johnSayHello();
  
  