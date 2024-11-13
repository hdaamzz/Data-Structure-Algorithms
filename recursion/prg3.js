function sumOfArray(arr,n=arr.length){
    if(n===0){
        return 0
    }
    return arr[n-1]+sumOfArray(arr,n-1)
}
console.log(sumOfArray([1,2,3,4,5,6,7,8,9]));
