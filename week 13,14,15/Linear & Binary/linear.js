//Linear search in js
function linear(arr,val){

    for(let i = 0 ;i <arr.length;i++ ){

        if(arr[i]==val)
            return true        
    }  
     return false
}
console.log(linear([9,3,2,5,3,2,8,7,0,6],2))