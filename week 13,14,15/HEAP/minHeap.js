class MinHeap {
    constructor() {
        this.heap = [null]; // Initialize with a null value to make heap 1-based
    }

    // Inserts a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up for maintaining the heap property after insertion
    heapifyUp(index) {
        while (index > 1 && this.heap[Math.floor(index / 2)] > this.heap[index]) {
            this.swap(Math.floor(index / 2), index);
            index = Math.floor(index / 2);
        }
    }

    // Removes and returns the minimum value from the heap
   
    remove() {
        if (this.heap.length < 2) return null;
        const minValue = this.heap[1];
        if (this.heap.length === 2) { // Only one element in the heap
            return this.heap.pop();
        }
        this.heap[1] = this.heap.pop();
        this.heapifyDown(1);
        return minValue;
    }

    // Heapify down for maintaining the heap property after extraction
    heapifyDown(index) {
        let smallest = index;
        const left = 2 * index;
        const right = 2 * index + 1;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Swaps two values in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Builds a heap from an unsorted array
    buildHeap(arr) {
        this.heap = [null, ...arr]; // null is added at the beginning to make the array 1-based
        const startIdx = Math.floor(this.heap.length / 2);
        for (let i = startIdx; i >= 1; i--) {
            this.heapifyDown(i);
        }
    }
    display() {
        console.log(this.heap.slice(1)); // Skip the first element (null) and display the heap
    }
}
// Example usage
const minHeap = new MinHeap();

// Insert elements into the heap
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);

// Extract the minimum element (which is 1 in this case)
const minValue = minHeap.extractMin();
console.log(minValue); // Output: 1

// The heap now should be rebalanced and have [3, 5, 8]
console.log(minHeap.heap.slice(1)); // Output: [3, 5, 8]
minHeap.display()