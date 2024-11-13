class Node {
    constructor(value) {//constructor to initialize node value
        this.value = value
        this.next = null
    }
}
class linkedList { //difining linked list class
    constructor() {

        this.head = null // the head is pointing at null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size //return the no of node in the list 
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) { // if the list is null
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let pre = this.head
            while (pre.next) {
                pre = pre.next
            }
            pre.next = node
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
    reverse(){
        let pre = null
        let cur = this.head 
        while(cur){
            let next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        this.head = pre

    }
    //unsorted
    // removeDuplicates() {
    //     if (this.isEmpty()) {
    //         return;
    //     }
    //     let cur = this.head;
    //     let prev = null;
    //     let seen = new Set();
    //     while (cur) {
    //         if (seen.has(cur.value)) {
    //             prev.next = cur.next;
    //             this.size--;
    //         } else {
    //             seen.add(cur.value);
    //             prev = cur;
    //         }
    //         cur = cur.next;
    //     }
    // }
    removeDuplicatesFromSorted() {
        if (this.isEmpty()) {
            return;
        }
        let cur = this.head;
        while (cur && cur.next) {
            if (cur.value === cur.next.value) {
                cur.next = cur.next.next;
                this.size--;
            } else {
                cur = cur.next;
            }
        }
    }
    arrToLinkedList(arr) {
        for (let i of arr) {
            this.append(i)
        }
    }
    print() {
        if (this.isEmpty()) {
            console.log('list is empty')

        } else {
            let cur = this.head
            let listValue = ""
            while (cur) {
                listValue += `${cur.value} `
                cur = cur.next
            }
            console.log(listValue)
        }
    }

}
const arr = [1, 2, 4, 6, 7, 7, 9]
const list = new linkedList()
console.log(list.getSize(), list.isEmpty())
list.arrToLinkedList(arr)
list.print()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()
list.append(40)
list.append(50)
list.print()
list.insert(10, 0)
list.print()
list.insert(20, 0)
list.insert(30, 1)
list.print()
// console.log(list.removeFrom(2))
// console.log(list.removeValue(40))
console.log(list.search(40))
list.reverse()
list.print()

// var isValid = function(s) {
//     for(let i=0;i<s.length;i+=2){
//         console.log(s[i])
//         let brac =s[i+1].split().reverse()
//         console.log(brac[0],'brac')
//         if(s[i]!==brac[0]){
//             return false
//         }
//     }
//     return true
// };
// console.log(isValid("()[]{}"))


