class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }


    isEmpty() {
        return this.size==0
    }
    getSize() { 
        return this.size;
      }

    enqueue(item) {
    const node = new Node(item);
    if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }
  

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let removeValue = this.first.value;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removeValue;
  }
  peek() {
    if (this.isEmpty()) {
      return 'empty queue';
    }
    return this.first.value;
  }
    print() {

        if (this.isEmpty()) {
            return 'empty queue'
        }

        let current = this.first
        let res = ''
        while (current) {
            res +=`${current.value} `
            current = current.next
        }
        console.log( res.trim())
    }
}
const queue = new Queue();

console.log(queue.isEmpty()); // true

for (let i = 5; i < 12; i++) {
  queue.enqueue(i);
}

queue.print(); // 5 6 7 8 9 10 11

console.log(queue.peek()); // 5
console.log(queue.getSize()); // 7
