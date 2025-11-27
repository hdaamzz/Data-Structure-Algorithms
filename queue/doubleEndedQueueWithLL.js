class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}

class Deque {
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    
    pushFront(value){
        const node=new Node(value)
        if(!this.head){
            this.head=this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++
    }
    pushBack(value){
        const node = new Node(value);
        if(!this.tail){
            this.head=this.tail=node;
        }else{
            node.prev=this.tail;
            this.tail.next=node;
            this.tail=node;
        }
        this.size++;
    }
    popFront(){
        if(!this.head)return null;
        const value=this.head.value;
        this.head=this.head.next;
        if(this.head){
            this.head.prev=null;
        }else{
            this.tail=null
        }
        this.size--;
        return value
    }
    popBack(){
        if(!this.tail)return null;
        const value=this.tail.value;
        this.tail=this.tail.prev;
        if(this.tail){
            this.tail.next=null
        }else{
            this.head=null
        }
        this.size--;
        return value;
    }
    print() {
      let out = []
      let curr = this.head

      while (curr) {
        out.push(curr.value)
        curr = curr.next
      }

      console.log(out)
    }
}


const queue=new Deque();

queue.pushFront(10);
queue.pushFront(13);
queue.pushFront(14);
queue.pushFront(15);
queue.pushFront(16);
queue.pushFront(18);
queue.pushFront(19);
queue.pushBack(90);
queue.pushBack(9);
queue.popFront()
queue.popBack()

queue.print()


