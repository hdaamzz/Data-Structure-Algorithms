//merge Sort 

function mergeSort(arr){
    if(arr.length < 2 ){
        return arr;
    }
    const mid  = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return mergeSort(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr = []
    while(leftArr.length &&rightArr.length){
        if(leftArr[0] <= rightArr[0]){

            sortedArr.push(leftArr.shift())
        }else{

            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr = [8,4,9,7,5,2,1]
console.log(mergeSort(arr))
