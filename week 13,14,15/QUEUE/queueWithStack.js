
class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
        
    }

    enqueue(val){
        this.stack1.push(val);
        
    }   
    dequeue(){
        while(this.stack1.length>0){
            this.stack2.push(stack1.pop())
        }
        return this.stack2.pop()
    }
    enqueue(value){
        for(let i =0; i<this.stack2.length;i++){

            this.stack1.push(this.stack2.pop())
        }

        this.stack1.push(value)
    }
    peek(){
        
        if(this.stack1.length>0){

            return this.stack1[0]
        }
    }
     size() {
        // The size of the queue is the total number of elements in both stacks
        return this.stack1.length + this.stack2.length;
    }

    empty() {
        // The queue is empty if both stacks are empty
        return this.size() === 0;
    }
}
