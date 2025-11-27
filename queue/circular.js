class CircularQueue{
  constructor(size){
    this.items=new Array(size);
    this.capacity=size;
    this.front=-1;
    this.last=-1;
  }
  
  isFull(){
    return (this.last +1 )% this.capacity == this.front;
  }
  
  isEmpty(){
    return this.front == -1;
  }
  
  enqueue(value){
    if(this.isFull()){
      console.log("Queue overflow (full)");
      return 
    } 
    if(this.isEmpty()){
      this.front=0;
    }
    this.last=(this.last +1 )%this.capacity;
    this.items[this.last]=value
  }
  dequeue(){
    if (this.isEmpty()) {
      console.log("Queue Underflow (Empty)");
      return;
    }
    let removeItem=this.items[this.front];
    if(this.front === this.last){
      this.front= -1;
      this.last= -1;
    }else{
      this.front=(this.front+1)%this.capacity;
    }
    return removeItem;
  }
  
  peek(){
    if(this.isEmpty())return 'Queue is empty';
    return this.items[this.front];
  }
  
  display(){
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let i =this.front;
    let res=[];
    while(true){
      res.push(this.items[i]);
      if(i==this.last)break;
      i=(i+1)%this.capacity;
    }
    console.log(res.join(' <- '))
  }
}


const cq=new Queue(6);

cq.enqueue(10)
cq.enqueue(13)
cq.enqueue(14)
cq.enqueue(1)
cq.enqueue(107)
cq.enqueue(16)
// cq.dequeue()

cq.display()
