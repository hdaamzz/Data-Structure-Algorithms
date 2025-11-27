class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return "this queue is empty"
        }
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length
    }
    print(){
        return this.items.toString()
    }

}

class StackWithQueue{
    constructor(){
            this.q1=new Queue()
            this.q2=new Queue()
        }
    isEmpty() {
        return this.q1.isEmpty();
    }

    push(element){
            this.q1.enqueue(element);
        }
    pop(){
        if(this.q1.isEmpty()){
            return "Stack is empty"
        }

        while(this.q1.size()>1){
            this.q2.enqueue(this.q1.dequeue())
        }
        let poppedvalue=this.q1.dequeue();

        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
        return poppedvalue
    }
    top(){
        if(this.q1.isEmpty()){
            return "queue is empty"
        }

        while(this.q1.size()>1){
            this.q2.enqueue(this.q1.dequeue())
        }
        let topElem = this.q1.dequeue()
        this.q2.enqueue(topElem);

        let temp = this.q1;
        this.q1=this.q2;
        this.q2=temp;

        return topElem
    }
    print() {
        console.log("Stack (top -> bottom):", this.q1.items.slice().reverse().toString());
    }
}

const list = new StackWithQueue();

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list.top());
list.print()
list.pop()
list.print()
