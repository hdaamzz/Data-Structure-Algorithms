class Node{
    constructor(value){
        this.value = value ;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size = 0 ;
    }
    isEmpty(){
        return this.size === 0 ;
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node ;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node ;
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node 
            this.tail = node
        }else{
            this.tail.next = node;
            this.tail = node
        }
        this.size++
    }
 
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--
        return value;

    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value; 
        if(this.size ===1 ){
            this.head = null
            this.tail = null
        }else{
            let pre = this.head;
            while(pre.next !== this.tail){
                pre =pre.next
            }
            pre.next = null
            this.tail = pre

        }
        this.size--
        return value;
    }
   
    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let cur = this.head;
            let listValue = ''
            while(cur){
                listValue += `${cur.value} `
                cur = cur.next
            }
            console.log(listValue)
        }
    }

}
const list = new LinkedList()
// list.arrayToLinkedList([2,4,5,6,6,7])


list.prepend(30)

list.prepend(20)
list.prepend(10)
list.append(40)
list.append(50)
console.log()
list.removeFromFront()
list.removeFromEnd()
list.print()

// list.print()

// list.print()

