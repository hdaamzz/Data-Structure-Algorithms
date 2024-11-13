class Stack{
    constructor(){
        this.items=[]
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0;
    }
    print(){
        console.log(this.items.toString());
    }
    size() {
        return this.items.length;
    }
    reverse(){
        let reverseItems=[]
        while(!this.isEmpty()){
            reverseItems.push(this.pop())
        }
        this.items=reverseItems
    }
    findSecondLargest() {
        if (this.size() < 2) {
            throw new Error("Stack must have at least two elements.");
        }

        let firstLargest = -Infinity;
        let secondLargest = -Infinity;
        const tempStack = new Stack();

        while (!this.isEmpty()) {
            let current = this.pop();

            if (current > firstLargest) {
                secondLargest = firstLargest;
                firstLargest = current;
            } else if (current > secondLargest && current !== firstLargest) {
                secondLargest = current;
            }

            tempStack.push(current);
        }

        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }

        if (secondLargest === -Infinity) {
            throw new Error("No second largest element found.");
        }

        return secondLargest;
    }

}

const stack = new Stack();
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)

stack.print()

console.log(stack.findSecondLargest());
