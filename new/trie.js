class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfword=false
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndOfword=true
    }
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfword
    }
    delete(word){
        this.deleteHelper(this.root,word,0)
    }
    deleteHelper(node,word,depth){
        if(!node)return null

        if(depth===word.length){
            if(node.isEndOfword){
                node.isEndOfword=false
            }
            return Object.keys(node.children).length===0
        }
        let char=word[depth]
        if(this.deleteHelper(node.children[char],word,depth+1)){
            delete node.children[char]

            return Object.keys(node.children).length===0 && !node.isEndOfword
        }
        return false
        
    }
    startWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char]
        }
        return true
    }
    suggestWith(prefix){
        let node=this.root;
        let result=[]
        for(let char of prefix){
            if(!node.children[char]){
                return []
            }
            node=node.children[char]
        }

        this.dfs(node,prefix,result)
        return result

    }
    dfs(node,prefix,result){
        if(node.isEndOfword){
            result.push(prefix)
        }
        for(let char in node.children){
            this.dfs(node.children[char],prefix+char,result)
        }
    }
    DFSTraversal(){
        let result=[]
        function traverse(node,prefix){
            if(node.isEndOfword){
                result.push(prefix)
            }
            for(let char in node.children){
                traverse(node.children[char],prefix+char)
            }
        }
        traverse(this.root,"")
        return result

    }
    BFSTraversal(){
        let result=[]
        let queue=[{node:this.root,prefix:""}]
        while(queue.length>0){
            let {node,prefix}=queue.shift()
            if(node.isEndOfword){
                result.push(prefix)
            }
            for(let char in node.children){
                queue.push({node:node.children[char],prefix:prefix+char})
            }
        }
        return result
    }
}
const trie =new Trie()
trie.insert("banana")
trie.insert("bun")
trie.insert("cat")
trie.insert("apple")
trie.insert("apply")
trie.insert("applied")

console.log(trie.BFSTraversal());