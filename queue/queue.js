class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Add item to end
  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  // Remove and return first item
  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return value;
  }

  // Check first element without removing
  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  // Number of items in queue
  size() {
    return this.rear - this.front;
  }

  // True if no items
  isEmpty() {
    return this.size() === 0;
  }

  // Remove all elements
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Shows clean array version of queue
  toArray() {
    const arr = [];
    for (let i = this.front; i < this.rear; i++) {
      arr.push(this.items[i]);
    }
    return arr;
  }

  // Debug print
  print() {
    console.log(this.toArray());
  }
}
