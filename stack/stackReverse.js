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
    reverse(){
        if(this.isEmpty()){
            return
        }
        let temp=[]
        while(!this.isEmpty()){
            temp.push(this.pop())
        }
        for(let val of temp){
            this.push(val)
        }
    }
}

const stack =new Stack()
stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.display()
stack.reverse()
stack.display()