class Maxheap{
    constructor(){
        this.heap=[]
    }
    getParent(index){
        return Math.floor((index-1)/2)
    }
    getRight(index){
        return 2*index +2
    }
    getLeft(index){
        return 2*index +1
    }
    swap(a,b){
        [this.heap[a],this.heap[b]]=[this.heap[b],this.heap[a]]
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(index){
        let largest=index;
        let leftIdx=this.getLeft(index);
        let rightIdx=this.getRight(index)

        if(leftIdx < this.heap.length && this.heap[leftIdx]>this.heap[largest]){
            largest=leftIdx
        }
        if(rightIdx<this.heap.length && this.heap[rightIdx]>this.heap[largest]){
            largest=rightIdx
        }
        if(largest !== index){
            this.swap(largest,index);
            this.shiftDown(largest)
        }
    }

    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length -1)
    }
    shiftUp(index){
        while(index>0){
            let parrent=this.getParent(index);
            if(this.heap[parrent]>=this.heap[index]){
                break
            }
            this.swap(parrent,index)
            index=parrent
        }
    }

    remove(){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length==1){
           return this.heap.pop()
        }
       let max=this.heap[0];
       this.heap[0]=this.heap.pop();
       this.shiftDown(0);
       return max
    }
    peek(){
        return this.heap.length>0?this.heap[0]:null
    }
}