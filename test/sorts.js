const arr=[1,8,4,7,3,8,3,9];

function bubble(arr){
    let swapped;
    do{
        swapped=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true
            }
        }
    }while(swapped)
    return arr
}

function insertion(array){
    for (let index = 1; index < array.length; index++) {
        let key =array[index];
        let j=index-1;
        while(j>=0 && array[j]>key){
            array[j+1]=array[j];
            j--;
        }
        array[j+1]=key
        
    }
    return array
}
//1,26,21,43
// console.log(insertion(arr));

function quick(arr){
    if(arr.length<1){
        return arr
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

// console.log(quick(arr));

function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid=Math.floor(arr.length /2);
    let left =arr.slice(0,mid);
    let right =arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted =[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

// console.log(mergeSort(arr));

function selection(arr){
    let n =arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

function selectionn(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                min=j;
            }
        }
        if(min!=i){
            [arr[i],arr[min]]=[arr[min],arr[i]]
        }
    }
    return arr
}
// console.log(selectionn(arr));


function merger(arr1,arr2){
    let sorted=[];
    while(arr1.length&&arr2.length){
        if(arr1[0]<arr2[0]){
            sorted.push(arr1.shift())
        }else{
            sorted.push(arr2.shift())
        }
    }
    return [...sorted,...arr1,...arr2]
}

const array1=[1,3,6,8,9];
const array2=[3,5,6,8,9]

// console.log(merger(array1,array2));


