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
        this.heap = [null, ...arr]; // Reset heap and set values
        const startIdx = Math.floor(this.heap.length / 2);
        for (let i = startIdx; i >= 1; i--) {
            this.heapifyDown(i);
        }
    }
}

// Heap Sort Function
function heapSort(arr) {
    const minHeap = new MinHeap();
    minHeap.buildHeap(arr);

    const sortedArray = [];
    while (minHeap.heap.length > 1) { // While there are elements to extract
        sortedArray.push(minHeap.remove());
    }

    return sortedArray;
}

// Example usage
const unsortedArray = [4, 10, 3, 5, 1];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [1, 3, 4, 5, 10]

