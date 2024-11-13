class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;  // Changed 'end' to 'isEndOfWord' for consistency
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }       

    startsWith(prefix) {
        let node = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    suggestWords(prefix) {
        let node = this.root;
        let results = [];

        // Traverse the Trie to find the node corresponding to the last character of the prefix
        for (let i = 0; i < prefix.length; i++) {
            let char = prefix[i];
            if (!node.children[char]) {
                return []; // No words found with this prefix
            }
            node = node.children[char];
        }

        // Use DFS to find all words starting from this node
        this.dfs(node, prefix, results);
        return results;
    }

    dfs(node, prefix, results) {
        if (node.isEndOfWord) {
            results.push(prefix);
        }

        for (let char in node.children) {
            this.dfs(node.children[char], prefix + char, results);
        }
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");

console.log(trie.suggestWords("app")); // ["apple", "app"]
console.log(trie.suggestWords("apr")); // ["apricot"]
console.log(trie.suggestWords("ban")); // ["banana"]
console.log(trie.suggestWords("a"));   // ["apple", "app", "apricot"]





// class Node{
//     constructor(){
//         this.child = []
//         this.end =false
//     }
// }
// class Trie{
//     constructor(){
//     this.root = new Node()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.child[char]){
//                 node.child[char]=new Node()
//             }
//             node = node.child[char]
//         }
//         node.end =true
//     }
//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.child[char]) return false
            
//              node = node.child[char]
//         }
//        return node.end
//     }
//     startWith(pre){
//         let node = this.root
//         for(let char of pre){
//             if(!node.child[char]) return false
            
//              node = node.child[char]
//         }
//         return true
       
//     }
//    sug(pre){
//        let node = this.root
//        let result = []
//        for(let char of pre){
//            if(!node.child[char]) return []
//            node = node.child[char]
//        }
//        this.dfs(node,pre,result)
//        return result
//    }
//    dfs(node,pre,result){
//        if(node.end){
//            result.push(pre)
//        }
//        for(let char in node.child){
//            this.dfs(node.child[char],pre+char,result)
//        }
//    }
// }

// let tr = new Trie()
// tr.insert("aswanth")
// tr.insert('awandh')
// tr.insert('aswin')
// tr.insert('ashwanth')
// tr.insert('ashok')
// console.log(tr.search('ashin'))
// console.log(tr.startWith('asu'))
// console.log(tr.sug("asw")); // 
// console.log(tr.sug("ash")); // 
// console.log(tr.sug("as")); // 
// console.log(tr.sug("aw")); 