function linearSearch(arr,target){
    for(let i=0 ;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
const array=[1,3,5,6,8,10,14,18]
console.log(linearSearch(array,10));
