class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const value = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return value;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  toArray() {
    return this.items.slice(this.front, this.rear);
  }

  print() {
    console.log(this.toArray());
  }
}
