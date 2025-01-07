let arr = [1,2,3,4,5,6,7,8,9,10,11];

function search(arr,target){
    for(let i=0;i<arr.length;i++){
        if(target===arr[i]){
            return i
        }
    }
    return -1
}

console.log(search(arr,10));
