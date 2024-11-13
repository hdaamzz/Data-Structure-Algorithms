// function fibo(n){
//     let fib=[0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] +fib[i-2]
//     }
//     return fib
// }
// console.log(fibo(4))

// function fact(n){
//     let fac = 1
//     for(let i = n ; i>0;i--, n--){
//         fac*=n
//     }
//     ret
// function rec(n){
//     if(n==0){
//         return 1 

//     }
//     return  n*rec(n-1)
// }
// console.log(rec(4))

// function fibonacci(n){
//     if(n==0){
//         return 
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(4))


// function fibo(){
//     if(n==0){
//         return 
//     }
//     return fibo(n-1)+ fibo(n-2)
// }


// function prime(n){
//     if(n<1){
//         return false
//     }
//     return (n &&(n-1))==0
// }
// console.log(prime(5))

function prime(n){
   
    if(n<2){
    return false;
    }
     
      for(let i=2;i<n;i++){
       
        if(n%i===0){
          return false
        }
      
    }
    return true
  }
  console.log(prime(5))
  console.log(prime(4))
  console.log(prime(12))
  function prime(n){
    if(n<2){
        return false
    }
    for(let i =2;i<n;i++){
        if(n%i ==0){
            return false
        }
    }
    return true
  }