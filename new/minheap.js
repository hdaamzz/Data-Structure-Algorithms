class minHeap{
    constructor(){
        this.heap=[]
    }
   getParent(i){
    return Math.floor((i-1)/2)
   }
   getRightChild(i){
    return 2*i +2
   }
   getLeftChild(i){
    return 2*i +1
   }
   swap(i,j){
    [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
   }
   heapifyDown(i){
    let smallest=i;
    let right=this.getRightChild(i);
    let left=this.getLeftChild(i);

    if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
        smallest=left
    }
    if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
        smallest=right
    }

    if(i!==smallest){
        this.swap(i,smallest)
        this.heapifyDown(smallest)
    }

   }
   buildHeap(arr){
    this.heap=arr
    for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
        this.heapifyDown(i)
    }
   }
   insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
   }
   heapifyUp(i){
    let parent=this.getParent(i)
    while(i>1 && this.heap[i] < this.heap[parent]){
        this.swap(i, parent);
        i = parent;
        parent = this.getParent(i);
    }
   }

   remove(){
    if(this.heap.length==0){
        return null
    }
    if(this.heap.length==1){
        return this.heap.pop()
    }
    let val=this.heap[0]
    this.heap[0]=this.heap.pop()
    this.heapifyDown(0)
    return val
   }
   display(){
    console.log(this.heap.slice(0));
    
   }
   
}

function heapSort(arr){
    const Heap=new minHeap()
    Heap.buildHeap(arr)

    const sortedArr=[]
    while(Heap.heap.length>1){
        sortedArr.push(Heap.remove())
    }
    return sortedArr
}
const arr=[
    1,  4,  6, 50,
   30, 20, 10
 ]

console.log(heapSort(arr));


const heap =new minHeap()

heap.insert(10)
heap.insert(30)
heap.insert(20)
heap.insert(50)
heap.insert(4)
heap.insert(1)
heap.insert(6)

