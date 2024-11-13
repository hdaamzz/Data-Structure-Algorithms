class MinHeap {
    constructor() {
        this.heap = []
    }

    getParent(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1
    }

    getRightChild(index) {
        return 2 * index + 2
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1)
    }
    buildHeap(arr) {
        this.heap = arr;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftDown(i)
        }
    }
    shiftUp(index) {
        while (index > 0) {
            let parent = this.getParent(index)
            if (this.heap[parent] <= this.heap[index]) {
                break;
            }
            this.swap(parent, index);
            index = parent
        }
    }


    shiftDown(index) {
        let smallest = index;
        let leftChildIndex = this.getLeftChild(index);
        let rightChildIndex = this.getRightChild(index);

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex      
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest != index) {
            this.swap(index, smallest);
            this.shiftDown(smallest)
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null
        }
        if (this.heap.length === 1) {
            return this.heap.pop()
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return min
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}


const heap=new MinHeap();

// heap.insert(10)
// heap.insert(11)
// heap.insert(12)
// heap.insert(13)
// heap.insert(14)
// heap.insert(15)
// heap.insert(16)
// heap.insert(17)
// heap.insert(18)
// heap.insert(19)
// heap.insert(20)
// heap.insert(8)
let arr=[1,78,2,89,8,7,66,43,6,4,3];

heap.buildHeap(arr)

console.log(heap.heap.slice(0));
