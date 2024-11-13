class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    display(){
        console.log(this.items.toString());
        
    }
}

function sort(stack){
    const tempStack =new Stack()
    while (!stack.isEmpty()) {
        let temp=stack.pop();
        while (!tempStack.isEmpty() && temp > tempStack.peek()) {
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    
    return tempStack
}

const stack =new Stack();
stack.push(10);
stack.push(16);
stack.push(9);
stack.push(15);

stack.display()
console.log(sort(stack));
