class Stack {
    constructor() {
        this.items = [];
    }

    
    push(element) {
        this.items.push(element);
    }


    pop() {
        if (this.isEmpty()) {
            console.log('Stack Underflow: Cannot pop element, stack is empty.');
        }
        return this.items.pop();
    }

   
    isEmpty() {
        return this.items.length === 0;
    }

    
    getSize() {
        return this.items.length;
    }

  
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

function reverseString(str) {
    const stack = new Stack();

    
    for (let char of str) {
        stack.push(char);
    }

   let reversedStr = ''
    while (!stack.isEmpty()){
        reversedStr += stack.pop();
    }

    return reversedStr;
}
console.log(reverseString('mayavi'))