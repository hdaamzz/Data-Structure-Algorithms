function selectionSort(arr){

    for(let i =0; i<arr.length-1 ; i++){

        let minIndex = i;

        // Find the index of the minimum element in the unsorted portion
        for(let j = i+1;i<arr.length;i++){

            if(arr[j]<arr[minIndex]){
                
                minIndex = j;

            }
        }
        // Swap the minimum element with the first element in the unsorted portion
        if(minIndex !==i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}
const arr =[64,25,15,22,88,56,1,9]
selectionSort(arr)