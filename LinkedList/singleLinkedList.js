class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size == 0;
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node
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
            let pre = this.head
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next
            }
            node.next = pre.next
            pre.next = node;
            this.size++
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let pre = this.head
            for (let i = 0; i < index - 1; i++) {
                pre = pre.next
            }
            removeNode = pre.next
            pre.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }


    removeValue(value) {
        if (this.isEmpty()) {
            return null
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
            return null
        }
    }
    searchIndex(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let cur = this.head
        while (cur) {
            if (cur.value == value) {
                return i
            }
            cur = cur.next
            i++
        }
        return -1
    }
    reverseList() {
        if (this.isEmpty() || this.size === 1) return;
        let curr = this.head;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }
    arrayToList(arr) {
        for (let val of arr) {
            this.append(val)
        }
    }
    print() {
        if (!this.isEmpty()) {
            let items = '';
            let curr = this.head;
            while (curr) {
                items += `==>${curr.value}`
                curr = curr.next
            }
            console.log(items)
        }
    }
    findMidValue() {
        if (!this.isEmpty()) {
            let slow = this.head;
            let fast = this.head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next
            }
            return slow.value
        }
    }
    deleteDuplicates() {
        if (!this.isEmpty()) {
            let curr = this.head;
            let prev = null;
            let set = new Set();
            while (curr) {
                if (set.has(curr.value)) {
                    prev.next = curr.next
                } else {
                    set.add(curr.value)
                    prev = curr
                }
                curr = curr.next
            }
        }
    }
    removeDuplicate() {  //without set emil question
        if (this.isEmpty()) return;
        let curr = this.head;
        while (curr) {
            let prev = curr;
            while (prev.next) {
                if (prev.next.value == curr.value) {
                    prev.next = prev.next.next;
                    this.size--
                } else {
                    prev = prev.next;
                }
            }
            curr = curr.next
        }
    }
    deleteMiddle() {
        if (!this.isEmpty()) {
            let fast = this.head;
            let slow = this.head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next
            }
            let curr = this.head;
            while (curr.next) {
                if (curr.next.value == slow.value) {
                    break;
                }
                curr = curr.next;
            }
            curr.next = curr.next.next
        }
        this.size--
    }
    removeOddValue() {
        while (this.head && this.head.value % 2 == 1) {
            this.size--;
            this.head = this.head.next;
        }
        let curr = this.head;
        while (curr && curr.next) {
            if (curr.next.value % 2 == 1) {
                curr.next = curr.next.next;
                this.size--
            } else {
                curr = curr.next
            }
        }
    }

    removeAdjacentOdd() {
        if (!this.head) return;
        let curr = this.head;
        while (curr && curr.next && curr.value % 2 == 1 && curr.next.value % 2 == 1) {
            curr.next = curr.next.next;
            this.size--
        }
        while (curr && curr.next) {
            if (curr.value % 2 == 1 && curr.next.value % 2 == 1) {
                curr.next = curr.next.next;
                this.size--
            } else {
                curr = curr.next
            }
        }
    }

    removeAdjacentEven() {
        if (!this.head) return;

        let curr = this.head;

        while (curr && curr.next && curr.value % 2 === 0 && curr.next.value % 2 === 0) {
            curr.next = curr.next.next;
            this.size--
        }
        while (curr && curr.next) {
            if (curr.value % 2 === 0 && curr.next.value % 2 === 0) {
                curr.next = curr.next.next;
                this.size--
            } else {
                curr = curr.next
            }
        }
    }

    sortList() {
        if (!this.isEmpty()) {
            let swapped;
            do {
                swapped = false;
                let curr = this.head;
                while (curr.next) {
                    if (curr.value > curr.next.value) {
                        let temp = curr.value;
                        curr.value = curr.next.value;
                        curr.next.value = temp;
                        swapped = true;
                    }
                    curr = curr.next
                }


            } while (swapped)
        }
    }

    detectCycle() {
        if (!this.isEmpty()) {
            let fast = this.head;
            let slow = this.head;

            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow == fast) {
                    return true;
                }
            }
            return false
        }
    }

    createCycle() {
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = this.head.next;
    }

    convertToCircular() {
        if (!this.isEmpty()) {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = this.head;
        }
    }
    getSize() {
        return this.size
    }

    deleteKthElementFromEnd(k) {
        if (k <= 0 || k > this.size || this.isEmpty()) {
            console.log('Invalid position or empty list');
            return;
        }
        if (k === this.size) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head;
        let position = this.size - k;

        for (let i = 1; i < position; i++) {
            curr = curr.next;
        }

        curr.next = curr.next.next;
        this.size--;
    }

    removeFromEnd(k) { //two pointer method
        if (k <= 0 || k > this.size) return console.log("Invalid position");
        let fast = this.head;
        let slow = this.head;


        for (let i = 0; i < k; i++) {
            fast = fast.next;
        }

        if (!fast) {
            this.head = this.head.next;
            this.size--
            return;
        }

        while (fast.next) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        this.size--;
    }



    swapFistAndLastNode() {
        if (this.size < 1) {
            return
        }
        let curr = this.head;
        let prev = null;
        while (curr.next) {
            prev = curr;
            curr = curr.next
        }
        prev.next = this.head;
        curr.next = this.head.next;
        this.head.next = null;
        this.head = curr
    }
    removeLastInstance(value) {
        if (this.isEmpty()) {
            return;
        }
        let curr = this.head;
        let lastMatch = null;
        let beforeLastMatch = null;
        let prev = null;
        while (curr) {
            if (curr.value == value) {
                lastMatch = curr;
                beforeLastMatch = prev
            }
            prev = curr
            curr = curr.next
        }
        if (!lastMatch) {
            return
        }
        if (lastMatch == this.head) {
            this.head = this.head.next
        } else {
            beforeLastMatch.next = lastMatch.next;
        }
        this.size--;
        return true
    }

    mergeAndSort(otherList) {
        if (!otherList || otherList.isEmpty()) {
            this.sort();
            return;
        }

        let curr = otherList.head;
        while (curr) {
            this.append(curr.value);
            curr = curr.next;
        }

        this.sort();
    }
    mergeTwoSortedLists(list1, list2) {
        let dummy = new Node(0)
        let curr = dummy;

        while (list1 && list2) {
            if (list1.value < list2.value) {
                curr.next = list1
                list1 = list1.next
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next
        }

        if (list1) curr.next = list1;
        if (list2) curr.next = list2;

        return dummy.next;
    }

    merge(list1, list2) {
        let dummy = { next: null }
        let curr = dummy;

        while (list1 && list2) {
            if (list1.value < list2.value) {
                curr.next = list1
                list1 = list1.next
            } else {
                curr.next = list2;  
                list2 = list2.next;
            }
            curr = curr.next
        }
        curr.next = list1 || list2

        return dummy.next;
    }

    mergeSort(head = this.head) { //O(n lon n) complexity sorting
        if (!head || !head.next) {
            return head
        }
        let slow = head, fast = head, prev = null;
        while (fast && fast.next) {
            prev = slow
            slow = slow.next;
            fast = fast.next.next
        }
        prev.next = null;

        const left = this.mergeSort(head);
        const right = this.mergeSort(slow)

        return this.merge(left, right)
    }

}

const linklist = new LinkedList()
let arr = [1, 2, 3, 45, 3, 67, 3, 89, 8, 7, 6]
linklist.arrayToList(arr)
console.log(linklist.findMidValue());
linklist.print()
linklist.convertToCircular()
console.log(linklist.detectCycle())












