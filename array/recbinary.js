function recursiveBinarySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex=Math.floor((leftIndex+rightIndex)/2);
    if(target ===arr[middleIndex]){
        return middleIndex
    }

    if(target<arr[middleIndex]){
       return search(arr,target,leftIndex,middleIndex-1)
    }else{
       return search(arr,target,middleIndex +1,rightIndex)
    }
}
const array = [1,2,3,4,8,9,11,45,66]
console.log(recursiveBinarySearch(array,11));
