class Stack{
    constructor(){
        this.items=[];
    }
   
    push(element){
        this.items.push(element)
    }
   
    pop(){
        if(this.items.length ===0){
            return 'stack  is empty'
        }
        return this.items.pop()
    }
  
    peek(){
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length ===0;
    }
  
    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
 
    print(){
        return this.items.join(',')
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size()); 
// console.log(stack.pop()); 
console.log(stack.print()); 