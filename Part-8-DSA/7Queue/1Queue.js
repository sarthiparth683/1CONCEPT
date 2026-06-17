// Queue Basics - A Queue follows the FIFO (First-In-First-Out) principle.

class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  // Add element to the back of the queue: O(1)
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  // Remove element from the front of the queue: O(1)
  dequeue() {
    if (this.isEmpty()) return null;
    
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  // View the front element: O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
}

// Usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // Output: 10