class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node ;
        }else{
            node.next = this.head;
            this.head= node;
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty ;)');
            
        }else{
            let curr = this.head;
            let listvalus='';
            while(curr){
                listvalus+=`${curr.value}`;
                curr=curr.next
            }
            console.log(listvalus);
            
        }
    }
}

const list = new LinkedList();
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());

list.prepend(67);
list.prepend(99);
list.prepend(73);
list.prepend(67);
list.prepend(99);
list.prepend(73);
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());

list.print()
