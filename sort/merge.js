function mergeSort(arr){

    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length /2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr){
    let sortedArr=[];
    while(leftArr.length && rightArr){
        if(leftArr[0]>=rightArr[0]){
            sortedArr.push(rightArr.shift())
        }else{
            sortedArr.push(leftArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr=[4,2,6,3,8,3,7,3,7,3,8,89,95,2]

console.log(mergeSort(arr));