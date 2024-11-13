class minHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
           this.shiftDown(i) 
        }
    }
    shiftDown(index){
       let smallest=index;
       let rightIndex=this.getRightChild(index);
       let leftIndex=this.getLeftChild(index)

       if(leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[smallest]){
            smallest=leftIndex
       }
       if(rightIndex <this.heap.length && this.heap[rightIndex] <this.heap[smallest]){
        smallest=rightIndex
       }
       if(smallest!==index){
        this.swap(index,smallest);
        this.shiftDown(smallest);
       }

    }
    getParent(index){
        return Math.floor((index-1)/2);
    }

    getLeftChild(index){
        return (2 * index) +1
    }
    getRightChild(index){
        return (2 * index) +2
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length -1)
    }

    shiftUp(index){
        while(index>0){
            let parent=this.getParent(index);
            if(this.heap[parent] <= this.heap[index]){
                break;
            }
            this.swap(parent,index);
            index=parent
        }
    }

    
}