function insertionSort(arr){
    for(let i =1;i<arr.length;i++){
        let key = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] =key
    }
}
const arr = [20,4,10,0,98,57,6,8,3,9,13,96]
insertionSort(arr)
console.log(arr)