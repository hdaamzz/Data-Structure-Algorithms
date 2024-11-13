const arr=[2,3,4,5,6,7,8,9,10];

function sumArray(arr,n=arr.length){
    if(n===0){
        return 1
    }
    return arr[n-1]+sumArray(arr,n-1)
}

console.log(sumArray(arr))