class minHeap{
    constructor(){
        this.heap=[]
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(i){
        let smallest=i;
        let right=2*i+2;
        let left=2*i+1;

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest=left
        }
        if(right < this.heap.length && this.heap[right] <this.heap[smallest]){
            smallest=right
        }
        if(i!==smallest){
            this.swap(i,smallest)
            this.shiftDown(smallest)
        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(i){
        let parent=Math.floor((i-1)/2)
        while(i>0 && this.heap[i] < this.heap[parent]){
            this.swap(i,parent)
            i=parent
            parent=Math.floor((i-1)/2)
        }
    }
    remove(){
        if(this.heap.length==0){
            return null
        }
        if(this.heap.length==1){
            return this.heap.pop()
        }
        let val=this.heap[0];
        this.heap[0]=this.heap.pop()
        this.shiftDown(0)
        return val
    }
}

function heapSort(arr){
    let temp=new minHeap()
    temp.buildHeap(arr)

    let result=[]
    while(temp.heap.length){
        result.push(temp.remove())
    }
    return result
}

let arr=[23,4,43,1,3,74,33,86,121]
console.log(heapSort(arr));
