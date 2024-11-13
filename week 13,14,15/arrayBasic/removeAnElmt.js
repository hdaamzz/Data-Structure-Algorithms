
function del(arra,x){
    let ind =-1
    let arr = arra
    for(let i =0;i<arr.length;i++){
        if(arr[i]==x){
            ind = i
           break
            
        }
    }
    if(ind ==-1) return  arr
    for(let j = ind;j<arr.length;j++){
        arr[j]=arr[j+1]
    }
    arr.length = arr.length-1
    
    return arr
}
let arr =[9,5,3,2,1,6,7]
console.log(del(arr,5))


//push
function customPush(arr, element) {
    arr[arr.length] = element;
    return arr.length;
}

// Example usage:

customPush(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
