class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class DoubleList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    isEmpty(){
        return this.size==0
    }
    append(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
            
        }
        this.size++;
    }
    prepend(value){
        const node =new Node(value);
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++;
    }
    deleteWithValue(value){
        if(!this.isEmpty()){
            let curr=this.head;
            while(curr){
                if(curr.value==value){
                    if(curr== this.head && curr==this.tail){
                    this.head=null;
                    this.tail=null;
                    }else if(curr == this.head){
                    this.head=this.head.next;
                    this.head.prev=null
                    }else if(curr == this.tail){
                    this.tail=this.tail.prev;
                    this.tail.next=null;
                    }
                    else{
                    curr.prev.next=curr.next;
                    curr.next.prev=curr.prev;
                    }
                     this.size--;
                     return
                }
                curr=curr.next
            }
        }
    }
    reverseList(){
        if(!this.isEmpty()){
           let curr=this.head;
           let temp=null;
           while(curr){
               temp=curr.next;
               curr.next=curr.prev
               curr.prev=temp
               curr=temp
           }
           temp=this.head;
           this.head=this.tail;
           this.tail=temp
        }
    }
    print(){
        let items=""
        let curr=this.head;
        while(curr){
            items+=`<==>${curr.value}`
            curr=curr.next
        }
        console.log(items)
    }
    
}

const dlist=new DoubleList()
dlist.append(10)
dlist.append(11)
dlist.append(12)
dlist.append(13)
dlist.append(14)
dlist.append(15)
dlist.reverseList()
dlist.print();