class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data)); // Fixed typo here
    }
    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

let rootNode = new Node(1);
rootNode.add(2);
rootNode.add(3);
rootNode.add(4);

console.log(rootNode.children.map(node => node.data)); 

// rootNode.remove(3);

console.log(rootNode.children.map(node => node.data)); 