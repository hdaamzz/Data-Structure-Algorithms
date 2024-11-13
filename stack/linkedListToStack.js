class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        
    }
}
class LinkedList{
    
    constructor(){
        this.top=null
    }
    
    push(value){
        const newNode=new Node(value);
        if(this.top !== null){
            newNode.next=this.top
        }
        this.top= newNode
    }
    pop(){
        if(this.isEmpty()){
            return "stack underflow"
        }
        const poppedvalue=this.top.value;
        this.top=this.top.next
        return poppedvalue
    }
    peek(){
         if(this.isEmpty()){
            return "stack is empty"
        }
        return this.top.value
    }
    
    isEmpty(){
        return this.top === null
    }
    print(){
         if(this.isEmpty()){
            return "stack is empty"
        }
        let curr=this.top;
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
    
}

const linkedlist = new LinkedList();
linkedlist.push(10);
linkedlist.push(11);
linkedlist.push(12);
linkedlist.pop()
linkedlist.print()
    