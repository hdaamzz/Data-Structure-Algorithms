class Stack{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Aadyam saanam keett "
        }
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    print(){
        return this.items.toString()
    }
}

class QueueWithStack{
    constructor(){
        this.s1 =new Stack();
        this.s2 =new Stack();
    }
    
    enqueue(element){
        this.s1.push(element)
    }

    dequeue(){

        if(this.s2.isEmpty()){

            while(!this.s1.isEmpty()){
              this.s2.push(this.s1.pop());
            }
           
        }
        return this.s2.pop()
    }

    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }

    peek(){
        if(this.s2.isEmpty()){
            while(!this.s1.isEmpty()){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.peek()
    }
    print() {
        console.log("s1:", this.s1.items);
        console.log("s2:", this.s2.items);
    }
    printRealOrder() {
        let s2copy = [...this.s2.items].reverse();  
        let s1copy = [...this.s1.items]; 
    
        let queueOrder = s2copy.concat(s1copy);
    
        console.log("Queue order:", queueOrder);
    }

    
}

const queue=new QueueWithStack();
queue.enqueue(30);
queue.enqueue(40);



console.log(queue.dequeue());
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.dequeue());

console.log(queue.peek());






