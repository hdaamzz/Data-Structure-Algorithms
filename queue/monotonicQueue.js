class MonotonicIncreasingQueue {
    constructor() {
        this.q = [];
    }

    push(val) {
        while (this.q.length > 0 && this.q[this.q.length - 1] > val) {
            this.q.pop();
        }
        this.q.push(val);
    }

    pop(val) {
        if (this.q.length > 0 && this.q[0] === val) {
            this.q.shift();
        }
    }

    min() {
        return this.q.length === 0 ? null : this.q[0];
    }

    isEmpty() {
        return this.q.length === 0;
    }
}
