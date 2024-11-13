// function fibo(n){
//  let fib = [0,1]

//  for(let i =2 ; i<n ; i++){
//     fib [i] = fib[n-1]+ fib[n-2]
//  }
//  return fib
// }

// console.log(fibo(5))

//recursive fibonnacci  method

function fibo (n){
if(n<2){
    return n
}
return fibo(n-1) + fibo(n-2)
}

console.log(fibo(2))
console.log(fibo(3))