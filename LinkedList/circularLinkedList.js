class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class CircularList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            node.next=this.head;
        }else{
            let curr=this.head;
            while(curr.next !== this.head){
                curr=curr.next;
            }
            curr.next=node;
            node.next=this.head;
        }
        this.size++;
    }
    prepend(value){
        const node =new Node(value);
        if(this.isEmpty()){
            this.head=node;
            node.next=this.head
        }else{
            let curr=this.head;
            while(curr.next !== this.head){
                curr=curr.next;
            }
            node.next=this.head;
            this.head=node;
            curr.next=this.head
        }
        this.size++
    }
    delete(value){
        if(this.isEmpty()){
            return false
        }
        let curr=this.head;
        let prev=null;
        let isDeleted=false;
        
        do{
            if(curr.value==value){
                if(prev==null){
                    //deleting head-node
                    if(this.size==1){
                        this.head=null;
                    }else{
                        let last=this.head;
                        while(last.next !== this.head){
                            last=last.next;
                        }
                        this.head=curr.next;
                        last.next=this.head
                    }
                }else{
                    prev.next=curr.next ;
                }
                this.size--;
                isDeleted=true;
                break;
            }else{
                prev=curr;
                curr=curr.next
            }
        }while(curr !== this.head)
        return isDeleted;
    }
    checkValue(value){
        if(!this.isEmpty()){
            let curr=this.head;
            do{
                if(curr.value==value){
                    return true;
                }
                curr=curr.next
            }while(curr !== this.head)
            return false
        }
    }
    
    print(){
        if(!this.isEmpty()){
            let items='';
            let curr=this.head;
            do{
                items+=`<==>${curr.value}`
                curr=curr.next
            }while(curr!== this.head)
            console.log(items)
        }
    }
}

const clist=new CircularList();
clist.append(10)
clist.append(11)
clist.append(12)
clist.append(13)
clist.append(14)
clist.prepend(5)
clist.prepend(1)
clist.delete(14)
console.log(clist.checkValue(410))

clist.print()