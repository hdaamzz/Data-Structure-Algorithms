
function validParanthasis(str){
    let stack=[];
    for(let i=0;i<str.length;i++){
        let curr = str[i];
        if(curr=='(' || curr=='{' || curr== '['){
            stack.push(curr)
        }else if(curr==')' || curr=='}' || curr== ']'){
            if(stack.length==0){
                return false
            }
            let top= stack.pop();
            if((curr==')'&&top!=='(')||(curr=='}'&&top!=='{')||(curr==']'&&top!=='[')){
                return false;
            }
        }
    }
    return stack.length==0
}