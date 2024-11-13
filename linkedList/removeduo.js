class Node {
    constructor(value) {
        this.value = value;
        this.next = null;  
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.size = 0;    
    }

   
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode; 
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next; 
            }
            curr.next = newNode; 
        }
        this.size++;
    }

    removeOddNodes() {
        
        while (this.head && this.head.value % 2 !== 0) {
            this.head = this.head.next;
        }

        
        let current = this.head;
        while (current && current.next) {
            if (current.next.value % 2 !== 0) {
               
                current.next = current.next.next;
            } else {
                
                current = current.next;
            }
        }
    }

   
    print() {
        let curr = this.head;
        let listValues = '';
        while (curr) {
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues.trim());
    }
}


const sList = new SinglyLinkedList();
sList.append(11);
sList.append(20);
sList.append(20);
sList.append(33);
sList.append(40);
sList.append(40);
sList.append(50);

console.log("Original Linked List:");
sList.print();

sList.removeOddNodes();
console.log("Linked List after removing duplicates:");
sList.print();
