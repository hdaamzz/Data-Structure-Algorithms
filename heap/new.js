class MinHeap{
    constructor(){
        this.heap=[]
    }
    parent(index){
        return Math.floor(index /2)-1
    }
    rightChild(index){
        return 2*index +2
    }
    leftChild(index){
        return 2*index +1
    }
    swap(a,b){
        [this.heap[a],this.heap[b]]=[this.heap[b],this.heap[a]]
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length /2)-1;i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(index){
        let smallest=index;
        let rightChildIdx=this.rightChild(index);
        let leftChildIdx=this.leftChild(index)
        if(leftChildIdx < this.heap.length && this.heap[leftChildIdx] < this.heap[smallest]){
            smallest=leftChildIdx
        }
        if(rightChildIdx<this.heap.length && this.heap[rightChildIdx]<this.heap[smallest]){
            smallest=rightChildIdx
        }
        if(smallest!==index){
           this.swap(smallest,index);
           this.shiftDown(smallest)
        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(index){
        while(index>0){
            let parent=this.parent(index);
            if(this.heap[parent]<=this.heap[index]){
                break;
            }
            this.swap(parent,index);
            index=parent;
        }
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this.shiftDown(0);
        return min
    }
    peek(){
        return this.heap.length>0?this.heap[0]:null
    }
}

const heep=new MinHeap();
let arr=[30,75,48,25,64,89,24,54,22]
heep.buildHeap(arr)
console.log(heep.heap.slice(0));
heep.insert(100)
console.log(heep.heap.slice(0));
heep.remove();heep.remove()
console.log(heep.heap.slice(0));
