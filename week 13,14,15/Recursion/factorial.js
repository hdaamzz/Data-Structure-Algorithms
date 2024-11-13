function fact(n){

    let fac =1
    for(let i=n ; i>0; i--,n--){

        fac*=n
    }
    return fac
}
// console.log(fact(4))
function fac(n){
    if(n==0){
        return 1
    }
    return n*fac(n-1)
}
console.log(fac(4))