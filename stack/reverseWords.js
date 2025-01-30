function reverseWordsUsingStack(str){
    let res='';
    let stack=[];
    let word=''

    for(let i=0;i<str.length;i++){
        if(str[i]!==' '){
            stack.push(str[i]);
        }else{
                while(stack.length>0){
                    word+=stack.pop()
                }
                res+=word+" ";
                word=""
        }
    }
    while(stack.length>0){
        word+=stack.pop()
    }
    res+=word;
    return res
}

console.log(reverseWordsUsingStack("hello world"));//olleh dlrow
