class Stack {
  constructor() {
    this.items = [];
  }

  // Add item to top
  push(value) {
    this.items.push(value);
  }

  // Remove and return top item
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Return top without removing
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Number of items
  size() {
    return this.items.length;
  }

  // True if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Remove all items
  clear() {
    this.items = [];
  }

  // Return clean array copy
  toArray() {
    return [...this.items];
  }

  // Debug print
  print() {
    console.log(this.items);
  }
}
