class MonotonicIncreasingStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        while (this.stack.length > 0 && this.stack[this.stack.length - 1] > val) {
            this.stack.pop();
        }
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}


class MonotonicDecreasingStack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        while (this.stack.length > 0 && this.stack[this.stack.length - 1] < val) {
            this.stack.pop();
        }
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}
