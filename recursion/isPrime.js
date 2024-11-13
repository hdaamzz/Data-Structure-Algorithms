function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(isPrime(6))


function isPrimeRecursive(n,i=2){
    if(n<2){
        return false;
    }
    
    if(i==n){
        return true
    }
    if(n%i===0){
        return false
    }
    return isPrimeRecursive(n,++i)
}

console.log(isPrimeRecursive(6))