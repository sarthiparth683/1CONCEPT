import Stack from "./Stack.js";

const stack = new Stack();
console.log("isEmpty result: ", stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack) 
console.log("peek result: ", stack.peek());
console.log("pop result: ", stack.pop());
console.log("peek result: ", stack.peek());
console.log("size result: ", stack.size());
console.log("isEmpty result: ", stack.isEmpty()); 

