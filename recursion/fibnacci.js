function fibnacci(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

console.log(fibnacci(10))


function fibnacciRecursive(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }
    return fibnacciRecursive(n-1)+fibnacciRecursive(n-2)
}



function fibnacci(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }
    return fibnacci(n-1)+fibnacci(n-2)
}
const fibSequence = [];
for (let i = 0; i < 15; i++) {
  fibSequence.push(fibnacciRecursive(i));
}
console.log(fibSequence);


