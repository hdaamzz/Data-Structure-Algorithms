class maxHeap{
    constructor(){
        this.heap=[]
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeftChild(i){
        return 2*i +1
    }
    getRightChild(i){
        return 2*i +2
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]= [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }
    heapifyUp(i){
        let parent=this.getParent(i)
        while(i > 0 && this.heap[parent] < this.heap[i]){
            this.swap(i,parent)
            i=parent
            parent=this.getParent(i)
        }
    }
    heapifyDown(i){
        let largest=i;
        let right=this.getRightChild(i)
        let left=this.getLeftChild(i)

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest=left
        }  
        if(right < this.heap.length && this.heap[right]> this.heap[largest]){
            largest=right
        }

        if(i!==largest){
            this.swap(i,largest);
            this.heapifyDown(largest)
        }

    }

    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }

    display(){
        console.log(this.heap.slice(0));
        
    }
    remove(){
        if(this.heap.length==0){
            return null
        }
        let val=this.heap[0]
        if(this.heap.length==1){
            return this.heap.pop()
        }
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return val
    }
    heapSort(heap){
        let sortedArr=[]
        while(heap.length>0){
            sortedArr.unshift(this.remove())
        }
        return sortedArr
    }
}


const heap =new maxHeap()
const arr=[1,4,2,67,3,676,34]
heap.buildHeap(arr)
heap.remove(676)
heap.display()
console.log(heap.heapSort(heap.heap));
