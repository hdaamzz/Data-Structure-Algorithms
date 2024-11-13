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
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word, prefix = false) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return prefix || node.isEndOfWord;
    }

    startsWith(prefix) {
        return this.search(prefix, true);
    }

    delete(word) {
        return this.deleteHelper(this.root, word, 0);
    }

    deleteHelper(node, word, depth) {
        if (depth === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return Object.keys(node.children).length === 0;
        }

        let char = word[depth];
        if (!node.children[char]) return false;

        let shouldDeleteCurrentNode = this.deleteHelper(node.children[char], word, depth + 1);

        if (shouldDeleteCurrentNode) {
            delete node.children[char];
            return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }

        return false;
    }

    suggestWords(prefix, limit = 10) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }

        let result = [];
        this.dfs(node, prefix, result, limit);
        return result;
    }

    dfs(node, prefix, result, limit) {
        if (result.length >= limit) return;
        
        if (node.isEndOfWord) {
            result.push(prefix);
        }
        
        for (let char in node.children) {
            this.dfs(node.children[char], prefix + char, result, limit);
        }
    }
}

// Test the implementation
const trie = new Trie();
trie.insert("apple");
trie.insert("apricot");
trie.insert("apply");
trie.insert("lyes");

console.log(trie.suggestWords("app")); // Should return ["apple", "apply"]
console.log(trie.suggestWords("")); // Should return all words, limited to 10
console.log(trie.search("apple")); // Should return true
console.log(trie.search("app")); // Should return false
console.log(trie.startsWith("app")); // Should return true
trie.delete("apple");
console.log(trie.search("apple")); // Should return false
console.log(trie.search("apply")); // Should return true