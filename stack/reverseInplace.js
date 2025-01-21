function reverseStringInPlace(str){
    let stack=[];
    let arr=str.split('');

    for(let i=0;i<arr.length;i++){
        stack.push(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=stack.pop();
    }
    return arr.join('')
}

let input = "hello world";
let reversed = reverseStringInPlace(input);
console.log(reversed);//dlrow olleh