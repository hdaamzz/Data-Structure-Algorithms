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
//O(n)
    append(value){
        const node= new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev=prev.next
            }
            prev.next=node;
        }
        this.size++
    }
//O(1)
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
                listvalus+=`${curr.value} `;
                curr=curr.next
            }
            console.log(listvalus);
            
        }
    }
}

const list = new LinkedList();
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());

list.append(67);
list.append(99);
list.append(73);
list.append(67);
list.append(99);
list.append(73);
console.log('List is empty?',list.isEmpty());
console.log('List size',list.getSize());

list.print()
