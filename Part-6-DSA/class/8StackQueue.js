//-----------------------------------------------------------------------------------------------------
// Stack:
//     data: array of elements
//     top: index of the top element, initialized to -1

// push(element):
//     increase top by 1
//     data[top] = element

// pop():
//     if top is less than 0:
//         return "Stack is empty"
//     else:
//         element = data[top]
//         decrease top by 1
//         return element
// isEmpty():
//     if top is equal to -1 :
//         return true
//     else    
//         return false
// isFull():
//     if top is equal to N // where N is the size of array
//         return true               
//     else
//         return false
// peek():
//     return data[top] // peek will simply return top most element of stack without deleteing from it.        

//-----------------------------------------------------------------------------------------------------
// # Create a stack
// stack = Stack()

// # Check if the stack is empty
// print("Is stack empty?", stack.is_empty())  # Output: Is stack empty? True

// # Push items onto the stack
// stack.push(10)
// stack.push(20)
// stack.push(30)

// # Check the size of the stack
// print("Size of stack:", stack.size())  # Output: Size of stack: 3

// # Peek at the top item
// print("Peek at top of stack:", stack.peek())  # Output: Peek at top of stack: 30

// # Pop items from the stack
// print("Popped item:", stack.pop())  # Output: Popped item: 30
// print("Popped item:", stack.pop())  # Output: Popped item: 20

// # Check the size after popping
// print("Size of stack after popping:", stack.size())  # Output: Size of stack after popping: 1

// # Peek after popping
// print("Peek after popping:", stack.peek())  # Output: Peek after popping: 10

// # Pop the last item
// print("Popped item:", stack.pop())  # Output: Popped item: 10

// # Check if the stack is empty
// print("Is stack empty?", stack.is_empty())  # Output: Is stack empty? True

//-----------------------------------------------------------------------------------------------------
// Class Queue:
//     data: array of elements

//     function Queue():
//         create an empty array to store elements

//     function enqueue(item):
//         add item to the end of the array

//     function dequeue():
//         if the array is not empty:
//             remove and return the first item from the array
//         else:
//             return "Queue is empty"

//     function front():
//         if the array is not empty:
//             return the first item from the array
//         else:
//             return "Queue is empty"

//     function is_empty():
//         if the array has no elements:
//             return True
//         else:
//             return False

//     function size():
//         return the number of elements in the array


//-----------------------------------------------------------------------------------------------------
// # Create a queue
// queue = Queue()

// # Enqueue items into the queue
// queue.enqueue("Apple")
// queue.enqueue("Banana")
// queue.enqueue("Cherry")

// # Dequeue items from the queue
// print("Dequeued item:", queue.dequeue())  # Output: Dequeued item: Apple
// print("Dequeued item:", queue.dequeue())  # Output: Dequeued item: Banana

// # Check the front of the queue
// print("Front of queue:", queue.front())  # Output: Front of queue: Cherry

// # Check the size of the queue
// print("Size of queue:", queue.size())  # Output: Size of queue: 1

// # Check if the queue is empty
// print("Is queue empty?", queue.is_empty())  # Output: Is queue empty? False

//-----------------------------------------------------------------------------------------------------
// function checkBalancedParentheses(expression) {
//     let stack = [];
//     for (let i = 0; i < expression.length; i++) {
//         let character = expression[i];

//         if (character === '(' || character === '[' || character === '{') {
//             stack.push(character);
//         } else if (character === ')' || character === ']' || character === '}') {
//             if (stack.length === 0) {
//                 return "not balanced";
//             } else {
//                 let top = stack.pop();
//                 if ((top !== '(' && character === ')') || 
//                     (top !== '[' && character === ']') || 
//                     (top !== '{' && character === '}')) {
//                     return "not balanced";
//                 }
//             }
//         }
//     }

//     if (stack.length !== 0) {
//         return "not balanced";
//     } else {
//         return "balanced";
//     }
// }

//-----------------------------------------------------------------------------------------------------
// function calculateStockSpanBruteForce(prices) {
//     let n = prices.length;
//     let span = new Array(n).fill(0);

//     for (let i = 0; i < n; i++) {
//         // Initialize the span of the current day to 1
//         span[i] = 1;

//         // Look for the previous days with prices less than or equal to the current day
//         let j = i - 1;
//         while (j >= 0 && prices[j] <= prices[i]) {
//             span[i] = span[i] + 1;
//             j = j - 1;
//         }
//     }

//     return span;
// }

//-----------------------------------------------------------------------------------------------------
// function calculateStockSpan(prices) {
//     let n = prices.length;
//     let stack = [];
//     let span = new Array(n).fill(0);

//     // The first day always has a span of 1
//     span[0] = 1;
//     stack.push({ index: 0, price: prices[0] });

//     for (let i = 1; i < n; i++) {
//         // Pop elements from stack while the current price is greater than the price at the top of stack
//         while (stack.length !== 0 && prices[i] >= stack[stack.length - 1].price) {
//             stack.pop();
//         }

//         // If stack becomes empty, it means no element to left is greater, so span is i+1
//         if (stack.length === 0) {
//             span[i] = i + 1;
//         } else {
//             // If not empty, span is the difference between current index and index of the top element
//             span[i] = i - stack[stack.length - 1].index;
//         }

//         // Push current price and index onto stack for future calculations
//         stack.push({ index: i, price: prices[i] });
//     }

//     return span;
// }

//-----------------------------------------------------------------------------------------------------
// function findNearestGreaterToLeft(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);

//     for (let i = 0; i < n; i++) {
//         let j = i - 1;
//         // Starting from the current element, move left
//         while (j >= 0 && arr[j] <= arr[i]) {
//             j = j - 1;
//         }

//         // If j >= 0, then arr[j] is the nearest greater element to the left
//         if (j >= 0) {
//             result[i] = arr[j];
//         }
//     }

//     return result;
// }

// // Example usage:
// let arr = [4, 5, 2, 10, 8];
// let result = findNearestGreaterToLeft(arr);
// console.log(result);  // Output: [-1, -1, 5, -1, 10]

//-----------------------------------------------------------------------------------------------------
// function findNearestGreaterToLeft(arr) {
//     let n = arr.length;
//     let result = new Array(n).fill(-1);
//     let stack = [];

//     for (let i = 0; i < n; i++) {
//         // Pop elements from stack while stack is not empty and arr[stack.top()] <= arr[i]
//         while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
//             stack.pop();
//         }

//         // If stack is not empty, the nearest greater element's index is at stack.top()
//         if (stack.length !== 0) {
//             result[i] = arr[stack[stack.length - 1]];
//         }

//         // Push current element's index onto stack
//         stack.push(i);
//     }

//     return result;
// }

// // Example usage:
// let arr = [4, 5, 2, 10, 8];
// let result = findNearestGreaterToLeft(arr);
// console.log(result);  // Output: [-1, -1, 5, -1, 10]

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------