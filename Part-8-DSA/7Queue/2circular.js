// Circular Queue - A Circular Queue is a queue with a fixed size where the last position is connected back to the first position, forming a circle. This avoids the wastage of space that happens in a standard array-based queue when elements are dequeued. It uses modulo arithmetic (index % capacity) to wrap around.

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (this.isFull()) return false;
    
    this.rear = (this.rear + 1) % this.capacity; // Wrap around
    this.items[this.rear] = element;
    this.currentLength++;
    
    if (this.front === -1) {
      this.front = this.rear; // Initialize front on first insertion
    }
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    
    const item = this.items[this.front];
    this.items[this.front] = null; // Clear the slot
    this.front = (this.front + 1) % this.capacity; // Wrap around
    this.currentLength--;
    
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
}