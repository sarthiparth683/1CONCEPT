// Deque (Double-Ended Queue) - A Deque (pronounced "deck") allows insertion and deletion at both ends (front and rear). It can function as both a Stack (LIFO) and a Queue (FIFO).

class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  // Add to back: O(1)
  addRear(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  // Add to front: O(1)
  addFront(element) {
    if (this.isEmpty()) {
      this.addRear(element);
    } else {
      this.frontIndex--;
      this.items[this.frontIndex] = element;
    }
  }

  // Remove from front: O(1)
  removeFront() {
    if (this.isEmpty()) return null;
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  // Remove from back: O(1)
  removeRear() {
    if (this.isEmpty()) return null;
    this.backIndex--;
    const item = this.items[this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
}