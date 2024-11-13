class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(node, word, depth) {
        if (!node) {
            return false;
        }
        if (depth === word.length) {
            if (node.isEndOfWord) {
                node.isEndOfWord = false;
            }
            return Object.keys(node.children).length === 0;
        }
        const char = word[depth];
        if (this.deleteHelper(node.children[char], word, depth + 1)) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        return false;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    suggestWords(prefix) {
        let node = this.root;
        const result = [];
        for (const char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        this.dfs(node, prefix, result);
        return result;
    }

    dfs(node, prefix, result) {
        if (node.isEndOfWord) {
            result.push(prefix);
        }
        for (const char in node.children) {
            this.dfs(node.children[char], prefix + char, result);
        }
    }

    DFSTraversal() {
        const result = [];
        function dfs(node, prefix) {
            if (node.isEndOfWord) {
                result.push(prefix);
            }
            for (const char in node.children) {
                dfs(node.children[char], prefix + char);
            }
        }
        dfs(this.root, "");
        return result;
    }

    BFSTraversal() {
        const result = [];
        const queue = [{ node: this.root, prefix: "" }];
        while (queue.length > 0) {
            const { node, prefix } = queue.shift();
            if (node.isEndOfWord) {
                result.push(prefix);
            }
            for (const char in node.children) {
                queue.push({ node: node.children[char], prefix: prefix + char });
            }
        }
        return result;
    }
}

// Example usage
const trie = new Trie();
trie.insert("aplienf");trie.insert("ap");
trie.insert("application");
trie.insert("applkvnlrvrjknfnlkr");
trie.insert("Dpple");
trie.insert("Dpplication");
trie.insert("Dpplye");
console.log(trie.BFSTraversal());
