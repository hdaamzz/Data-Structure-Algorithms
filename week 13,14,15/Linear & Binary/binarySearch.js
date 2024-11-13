function binarySearch(arr,x){
    
    let leftIndex =0
    let rightIndex = arr.length -1

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
         
        if(x===arr[middleIndex]) return middleIndex
        if(x>middleIndex) leftIndex = middleIndex+1
        else rightIndex = middleIndex -1


    }
   return -1
}

console.log(binarySearch([4,5,7,6,89,2],89))
//------------------------------------------------------------------------
//binary with recursion

function binaryRecursive(arr,t){
    return search(arr,t,0,arr.length)
}

function search(arr,t,leftIndex,rightIndex){

    Math.floor((leftIndex+rightIndex)/2)

    if(t==middleIndex){
        return middleIndex
    }
    if(t>middleIndex){
        return search(arr,t,middelIndex+1,rightIndex)
    }else{
        return search(arr,t,leftIndex,middleIndex-1)
    }


}

console.log(binarySearch([1,2,3,4,5,6,7,8],3))