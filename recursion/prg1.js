function recursiveFib(n){
    if(n<2){
        return n
    }
    return recursiveFib(n-1)+recursiveFib(n-2)
}

console.log(recursiveFib(10));
