class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Remove element from the queue
    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // View the first element in the queue
    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Display the entire queue
    printQueue() {
        console.log(this.items.join(' '));
    }

    // Remove duplicates from the queue
    removeDuplicates() {
        const uniqueSet = new Set();
        const newQueue = [];

        while (!this.isEmpty()) {
            const element = this.dequeue();
            // If element is not already in the set, add it to the new queue
            if (!uniqueSet.has(element)) {
                uniqueSet.add(element);
                newQueue.push(element);
            }
        }

        // Restore the queue with unique elements
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
