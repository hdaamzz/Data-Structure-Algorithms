function heapSort(heap){

    for(let i=Math.floor(heap.length/2)-1;i>=0;i--){
        heapifyDown(heap,heap.length,i)
    }

    for(let i=heap.length-1;i>=0;i--){
        [heap[0],heap[i]]=[heap[i],heap[0]];
        heapifyDown(heap,i,0)
    }
    return heap

    function heapifyDown(arr,n,i){
        let smallest=i;
        let left=i*2+1;
        let right=i*2+2;

        if(left < n && arr[left] > arr[smallest]){
            smallest=left
        }
        if(right < n&& arr[right] > arr[smallest]){
            smallest=right
        }
        if(smallest != i){
            [arr[smallest],arr[i]]=[arr[i],arr[smallest]];
            heapifyDown(arr,n,smallest)
        }
    }

}

let heap=[1,3,5,4,7,5,78,65,443,35,4,3];
console.log(heapSort(heap));
