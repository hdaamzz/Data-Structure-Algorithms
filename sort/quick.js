function quickSort(arr){
    if(arr.length <2){
        return arr
    }
    let pivot =arr[arr.length-1];
    let right=[];
    let left=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const array=[3,7,4,8,23,8,34,7,4,7,3];

console.log(quickSort(array))

function quickSort2(arr){
    if(arr.length <2){
        return arr
    }
    let pivotIndex = Math.floor(Math.random() * arr.length); 
    let pivot = arr[pivotIndex];
    let right=[];
    let left=[];
    for(let i=0;i<arr.length;i++){
        if(i !== pivotIndex){
            if(arr[i]>pivot){
                left.push(arr[i]);
            }else{
                right.push(arr[i]);
            }
        }

    }
    return [...quickSort2(left),pivot,...quickSort2(right)]
}


console.log(quickSort2(array))

