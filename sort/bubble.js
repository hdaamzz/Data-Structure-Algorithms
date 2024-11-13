function bubble(arr){
    let swapp;
    do{
        swapp=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i+1],arr[i]]=[arr[i],arr[i+1]]
                swapp=true
            }
        }
    }while(swapp==true)
        return arr
}

const arr=[3,7,4,7,3,7,3,7,3,8,4,7]
console.log(bubble(arr));
