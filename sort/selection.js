function selection(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let minI=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minI]){
                minI=j;
            }
        }
        if(minI!==i){
            [arr[i],arr[minI]]=[arr[minI],arr[i]]
        }
    }
    return arr
}
const array=[3,7,4,8,23,8,34,7,4,7,3];
console.log(selection(array));
