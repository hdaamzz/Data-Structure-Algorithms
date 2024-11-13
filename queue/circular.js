class CircularQueue{
    constructor(capacity){
        this.items=new Array(capacity);
        this.capacity=capacity;
        this.size=0
        this.front=-1;
        this.rear=-1;
    }

    isFull(){
        return this.size===this.capacity
    }
    isEmpty(){
        return this.size===0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear=this.rear+1;
            this.items[this.rear]=element;
            this.size+=1
            if(this.front===-1){
                this.front=this.rear;
            }
        }else{
            console.log("queue is full");
            
        }
    }

    dequeue(){
        if(this.isEmpty()){
               return  "queue is empty" 
        }
            const removerItem=this.items[this.front];
            this.items[this.front]=null;
            this.front=(this.front+1)%this.capacity
            this.size-=1
            if (this.isEmpty()) {
                this.front=-1;
                this.rear=-1 
            }
            console.log(removerItem);
            
            return
        
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let i=0;
            let str="";
            for(i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str+=this.items[i]+" "
            }
            str+=this.items[i]
            console.log(str);
        }

    }
}
const queue=new CircularQueue(5);

queue.enqueue(10);queue.enqueue(20);queue.enqueue(30);queue.enqueue(40);queue.enqueue(50);
queue.enqueue(100)
queue.dequeue()
queue.print()