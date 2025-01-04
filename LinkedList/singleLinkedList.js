class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size==0;
    }
    append(value){
        const node=new Node(value);
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=node
        }
        this.size++
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) { 
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let pre = this.head//initialize pre into the head
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next//the for loop ends at the previous node 
            }
            node.next = pre.next//ensuring the new node connect to the existing list 
            pre.next = node;//we connnect the previous node to new node 
            this.size++//increment the sizeby one
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode//creating variable to hold a referrance  to the node that will be removed
        if (index === 0) {
            removeNode = this.head//if it is zero we store a reference  to the head node in the vaariable
            this.head = this.head.next //with in change the head node from first node to second node .if the list have only one node it points at null
        } else {//node >0
            let pre = this.head//initialize previous pointer at head
            for (let i = 0; i < index - 1; i++) {//remove cheyyandathinte previous vare
                pre = pre.next//
            }
            removeNode = pre.next
            pre.next = removeNode.next//this will effectively detach remove node from the list 
        }
        this.size--//decrease ment size 
        return removeNode.value //return the value of removed node
    }


    removeValue(value) {
        if (this.isEmpty()) {
            return null //if the list is emptu return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let pre = this.head
            while (pre.next && pre.next.value !== value) {
                pre = pre.next
            }
            if (pre.next) {
                const removeNode = pre.next
                pre.next = removeNode.next
                this.size--
                return value
            }
            return null // how ever  the pointer reached  lasat node  in the list and no next node  and retun null for no node could be deleted 
        }
    }
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let cur = this.head
        while(cur){
            if(cur.value ==value){
                return i
            }
            cur =cur.next
            i++
        }
        return -1
    }
    reverseList(){
        let curr=this.head;
        let prev=null;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev
    }
    arrayToList(arr){
        for(let val of arr){
            this.append(val)
        }
    }
    print(){
        if(!this.isEmpty()){
            let items='';
            let curr=this.head;
            while(curr){
                items+=`==>${curr.value}`
                curr=curr.next
            }
            console.log(items)
        }
    }
    findMidValue(){
        if(!this.isEmpty()){
            let slow=this.head;
            let fast=this.head;
            while(fast && fast.next){
                slow=slow.next;
                fast=fast.next.next
            }
            return slow.value
        }
    }
    deleteDuplicates(){
        if(!this.isEmpty()){
            let curr=this.head;
            let prev=null;
            let set=new Set();
            while(curr){
                if(set.has(curr.value)){
                    prev.next=curr.next
                }else{
                    set.add(curr.value)
                    prev=curr
                }
                curr=curr.next
            }
        }
    }
    deleteMiddle(){
        if(!this.isEmpty()){
            let fast=this.head;
            let slow=this.head;
            while(fast  && fast.next){
                slow=slow.next;
                fast=fast.next.next
            }
            let curr=this.head;
            while(curr.next){
                if(curr.next.value==slow.value){
                    break;
                }
                curr=curr.next;
            }
            curr.next=curr.next.next
        }
        this.size--
    }
    
    sortList(){
       if(!this.isEmpty()){
           let swapped;
           do{
               swapped=false;
               let curr=this.head;
               while(curr.next){
                   if(curr.value > curr.next.value){
                        let temp=curr.value;
                       curr.value=curr.next.value;
                       curr.next.value=temp;
                       swapped=true;
                   }
                   curr=curr.next
               }
               
               
           }while(swapped)
       }
    }
    detectCycle(){
        if(!this.isEmpty()){
            let fast=this.head;
            let slow=this.head;
            
            while(fast && fast.next){
                slow=slow.next;
                fast=fast.next.next;
                if(slow==fast){
                    return true;
                }
            }
            return false
        }
    }
    createCycle(){
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = this.head.next;
    }
    convertToCircular(){
        if(!this.isEmpty()){
            let curr=this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next=this.head;
        }
    }
    getSize() {
        return this.size 
    }
    
    
}

const linklist=new LinkedList()
let arr=[1,2,3,45,3,67,3,89,8,7,6]
linklist.arrayToList(arr)
console.log(linklist.findMidValue());
linklist.print()
linklist.convertToCircular()
console.log(linklist.detectCycle())