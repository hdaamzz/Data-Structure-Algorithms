class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(' '));
    }

    removeDuplicates() {
        const uniqueSet = new Set();
        const newQueue = [];

        while (!this.isEmpty()) {
            const element = this.dequeue();

            if (!uniqueSet.has(element)) {
                uniqueSet.add(element);
                newQueue.push(element);
            }
        }
        this.items = newQueue;
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(1);

console.log("Original Queue:");
queue.printQueue();  // Output: 1 2 2 3 3 4 1

queue.removeDuplicates();

console.log("Queue after removing duplicates:");
queue.printQueue();  // Output: 1 2 3 4
