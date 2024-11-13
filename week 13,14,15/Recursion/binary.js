// function binaryRec(arr,t){
//     return search(arr,t ,0,arr.length-1)
// }
// function search(arr ,t ,leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(t==middleIndex){
//         return middleIndex
//     }
// if(t>middleIndex){
//     return search(arr,t,middleIndex+1,rightIndex)
// }else{
//     return search(arr,t,leftIndex,middleIndex-1)
// }

// }{
function binaryRe(arr,t ){
    return search(arr,t,0,arr.length-1)
}
function search(arr,t,left,right){
    if(left>right){
        return -1
    }
let middle = Math.floor((left+right)/2)
if(t==middle) return middle

if(t>middle){
    return search(arr,t,middle+1,right)

}else{
    return search(arr,t,left,middle-1)
}

}
console.log(binaryRe([2,3,4,5,6,7,8,9],7))
console.log(binaryRe([2,3,4,5,6,7,8,9],4))
console.log(binaryRe([2,3,4,5,6,7,8,9],6))
console.log(binaryRe([2,3,4,5,6,7,8,9],10))

