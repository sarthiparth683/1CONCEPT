# Javascript Revisit - 1




## Synchronous vs. Async in JS


- Synchronous => Code runs line by line
- asynchronous => code that doest block the main thread
    -> API calls

    ```
    console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 200);
console.log("End");
```

```

console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");
```

- JS uses an event loop to handle async operations without blocking the code.


## Promise and callback

## Callback
-> A function passed as an argument to another function.

```
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("GoodBye!");
}
greet("CAP", sayBye);
```

## Promise:
```
const promise = new Promise((resolve, reject) => {
  let succes = false;
  if (succes) resolve("Operations successfull!");
  else reject("Operation rejected!");
});

promise
  .then((res) => console.log(res))
  .catch((err) => {
    throw new Error("Something went wrong " + err);
  });
```

1. Difference between var, let and const
2. variable hoisting in js.
3. Difference between arrau and object in js
4. How do you check if a variable is an array ?
=> Array.isArray([]) // true
    -  Array.isArray({}) // false
5. Difference between function declaration and function expression?
6. What are arrow function and when should you use them?
    => void for methos needing `this` keyward
7. difference between regular function and an arrow function with respect to `this`?
=> regular function have their own `this` but arrow function dont.
8. difference between synchronous and asynchronous code in js
9. what is a callback function?
10. what are drawback of using callback?
=> harder to manage when we have the nested callback (known as callback hell)
=> 

```
getProducts(() => {
  processData(() => {
    saveData(() => {
      console.log("Done");
    });
  });
});
```

11. Promises?

12. How do `then()` and `catch()` works in promises?
=> then() => successfull resolve
    catch() => handles the errors

13. use of `async` and `await` ? if you forgot to provide `await` 
=> 
14.  difference between promise.all and Promise.race?
=> Promise.all() => waits for all promises to resolve or reject
    Promise.race() => resolves/rejects as soon one of the promises settled.

15. How do you handle the API errors when using fetch?
16. What is JSON and how do you parse it?
=> JSON.parse('{"name": "John"}')

17. Why do you use asynchoronous programming in Javascript?
=> 
18. What is the Event Loop in JS?










