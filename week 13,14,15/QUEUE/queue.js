class Queue{
    constructor(){
        this.items = []
    
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()//this makes linear time complexity
    }
    isEmpty(){
        return this.items.length ===0
    }
    size(){
        return this.items.length
    }
    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    print(){
        console.log(this.items.toString())
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
// queue.dequeue()
console.log(queue.peak())
queue.print()
console.log()