function stringRev(str){
    if(str === ''){
        return " "
    }
    return stringRev(str.slice(1))+str[0]
}

console.log(stringRev('hello'));
