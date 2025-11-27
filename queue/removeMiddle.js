class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length === 0
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    peek(){
        return this.items[0]

    }
    display(){
        console.log(this.items.toString());
    }
    size(){
        return this.items.length
    }
    removeMiddle(){
        let mid=Math.floor(this.size() /2)
        let temp=[]
        for(let i=0;i<mid;i++){
            temp.push(this.dequeue())
        }
        let removedItem=this.dequeue();
        while(!this.isEmpty()){
            temp.push(this.dequeue())
        }
        for(let val of temp){
            this.enqueue(val)
        }

        return removedItem
    }
}

const queue =new Queue()
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);

queue.display()
console.log(queue.removeMiddle());
queue.display()
