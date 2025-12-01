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
    while(leftArr.length && rightArr.length){
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

// below efficient code 

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const out = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) out.push(left[i++]);
    else out.push(right[j++]);
  }

  return out.concat(left.slice(i), right.slice(j));
}