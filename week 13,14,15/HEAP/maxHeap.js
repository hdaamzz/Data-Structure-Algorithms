class maxHeap {
    constructor() {
        this.heap = [null];
    }
     // Inserts a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up for maintaining the heap property after insertion
    heapifyUp(index) {
        while (index > 1 && this.heap[Math.floor(index / 2)] < this.heap[index]) {
            this.swap(Math.floor(index / 2), index);
            index = Math.floor(index / 2);
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
 // Removes and returns the maximum value from the heap
    
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
        let largest = index;
        const left = 2 * index;
        const right = 2 * index + 1;

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    // Swaps two values in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    display(){
        console.log(this.heap.slice(1))
    }
   
}

const mn = new maxHeap();
mn.insert(5);
mn.insert(7);
mn.insert(3);
mn.insert(6);
mn.insert(9);
mn.display();

// const unsortedArray = [4, 10, 3, 5, 1];
// console.log(heapSort(unsortedArray));

// class maxHeap {
//     constructor() {
//         this.heap = [null];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         while (index > 1 && this.heap[Math.floor(index / 2)] < this.heap[index]) {
//             this.swap(Math.floor(index / 2), index);
//             index = Math.floor(index / 2);
//         }
//     }

//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
//     }

//     remove() {
//         if (this.heap.length < 2) return null;

//         const maxValue = this.heap[1];
//         if (this.heap.length === 2) {
//             return this.heap.pop();
//         }

//         this.heap[1] = this.heap.pop();
//         this.heapifyDown(1);
//         return maxValue;
//     }

//     heapifyDown(index) {
//         let large = index;
//         let left = 2 * index;
//         let right = 2 * index + 1;

//         if (left < this.heap.length && this.heap[left] > this.heap[large]) {
//             large = left;
//         }
//         if (right < this.heap.length && this.heap[right] > this.heap[large]) {
//             large = right;
//         }
//         if (large !== index) {
//             this.swap(index, large);
//             this.heapifyDown(large);
//         }
//     }

//     buildHeap(arr) {
//         this.heap = [null, ...arr];
//         let stIdx = Math.floor(this.heap.length / 2);
//         for (let i = stIdx; i >= 1; i--) {
//             this.heapifyDown(i);
//         }
//     }

//     display() {
//         console.log(this.heap.slice(1));
//     }
// }

// function heapSort(arr) {
//     const max = new maxHeap();
//     max.buildHeap(arr);
//     let sort = [];
//     while (max.heap.length > 1) {
//         sort.push(max.remove());
//     }
//     return sort;
// }

// // Testing the updated code
// const mn = new maxHeap();
// mn.insert(5);
// mn.insert(7);
// mn.insert(3);
// mn.insert(6);
// mn.insert(9);
// mn.display();

// const unsortedArray = [4, 10, 3, 5, 1];
// console.log(heapSort(unsortedArray)); // Should output the sorted array [10, 7, 6, 5, 4, 3, 1]

