class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0
    }
    push(val){
        const node =new Node(val);
        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head;
            while(curr.next){
                curr=curr.next
            }
            curr.next = node;

        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return
        }
        let curr=this.head;
        let prev=this.head;

        while(curr.next){
            prev=curr;
            curr=curr.next
        }
        prev.next=null
    }

    print(){
        if(this.isEmpty()){
            return null
        }else{
            let values='';
            let curr=this.head;
            while(curr){
                values+=`${curr.value} `
                curr=curr.next
            }
            console.log(values)
        }
    }

}

const stack =new linkedlist();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
stack.pop()
stack.print()