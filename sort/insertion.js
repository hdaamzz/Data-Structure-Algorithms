function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1
        while(j>=0 && arr[j]<key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key
    }
    return arr
}
const array=[7,4,7,3,67,3,67,4,46,4,6,43]

console.log(insertionSort(array));
