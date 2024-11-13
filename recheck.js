//bst
class bst{
    levelOrder(){
        let root=this.root;
        let queue=[]
        queue.push(root)
        
        while(queue.length){
            let val=queue.shift()
            console.log(val.value)
            if(val.left){
                queue.push(val.left)
            }
            if(val.right){
                queue.push(val.right)
            }
        }
    }
    isValidBst(root,min=null,max=null){
        if(!root){
           return true
        }
        if((min !==null && root.value < min ) || (max!==null && root.value > max)){
            return false
        }
        return(
            this.isValidBst(root.left,min,root.value)&&
            this.isValidBst(root.right,root.value,max)
            )
    }
    findHeight(root){
        if(!root){
            return -1
        }
        let left=this.findHeight(root.left)
        let right=this.findHeight(root.right)
        
        return Math.max(left,right)+1
    }
    findClosest(target){
        let closest=this.root.value
        function travers(root){
            if(!root)return null
            if(Math.abs(root.value-target) < Math.abs(closest-target)){
                closest=root.value
            }
            if(target < root.value){
                travers(root.left)
            }else if(target > root.value){
                travers(root.right)
            }
        }
        travers(this.root)
        return closest
    }
    findDegree(nodeValue) {
        const node = this.findNode(this.root, nodeValue);
        if (node) {
            const degree = (node.left ? 1 : 0) + (node.right ? 1 : 0);
            return degree; // Return the degree (0, 1, or 2)
        }
        return null; // Node not found
    }

    findNode(root, value) {
        if (!root) return null;
        if (value === root.value) return root;
        return value < root.value ? this.findNode(root.left, value) : this.findNode(root.right, value);
    }
}

//heap
class heap{
    heapifyUp(i){
        while(i>0){
            let parent=this.getParent(i)
            if(this.heap[i] >= this.heap[parent]){
                break;
            }
            this.swap(i,parent)
            i=parent
            parent=this.getParent(i)
        }
     }
     buildHeap(arr){
        this.heap=arr
        for(let i=Math.floor(this.heap.length/2)-1;i>=0;i--){
            this.heapifyDown(i)
        }
    }
    heapifyDown(i){
        let smallest=i
        let right=this.getRight(i)
        let left=this.getLeft(i)
        
        if(left<this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest=left
        }
        if(right<this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest=right
        }
        if(i!==smallest){
            this.swap(i,smallest)
            this.heapifyDown(smallest)
        }
        
    }
    remove(){
        if(this.heap.length==0)return null
        if(this.heap.length==1)return this.heap.pop()
        let min=this.heap[0]
        
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return min
    }
}
function heapSort(heap){
    let temp=new minHeap()
    temp.buildHeap(heap)
    
    let queue=[]
    queue.push(temp.remove())
    while(temp.heap.length){
        queue.push(temp.remove())
    }
    return queue
}

//trie
class trie{
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

//graph

class garph{
    dfs(start , visit=new Set()){
        visit.add(start)
        console.log(start);
        for(let nei of this.adjList[start]){
            if(!visit.has(nei)){
                this.dfs(nei,visit)
            }
        }
    }
    bfs(start){
        let visited=new Set()
        let queue=[start]
        visited.add(start)

        while(queue.length>0){
            let vertex=queue.shift()
            console.log(vertex);
            for(let nei of this.adjList[vertex] ){
                if(!visited.has(nei)){
                    visited.add(nei)
                    queue.push(nei)
                }
            }
            
        }
    }
    getVertexCount() {
        return Object.keys(this.adjList).length;
    }
    getEdgeCount() {
        let count = 0;
        for (let vertex in this.adjList) {
            count += this.adjList[vertex].size;
        }
        return count / 2;  // Divide by 2 for undirected graph
    }
    getVertices() {
        return Object.keys(this.adjList);
    }
    getNeighbors(vertex) {
        return [...(this.adjList[vertex] || [])];
    }
    isConnected() {
        if (this.isEmpty()) return true;
        
        const vertices = this.getVertices();
        const visited = new Set();
        
        this.dfs(vertices[0], visited);
        
        return visited.size === vertices.length;
    }
    findShortestPath(start, target) {
        if (!this.adjList[start] || !this.adjList[target]) {
            return null; // If either vertex doesn't exist, there's no path
        }

        let queue = [start];
        let visited = new Set();
        let previous = {};

        visited.add(start);
        previous[start] = null; // Start point doesn't have a previous node

        while (queue.length > 0) {
            let vertex = queue.shift();

            if (vertex === target) {
                // If the target is reached, reconstruct the path
                let path = [];
                while (vertex !== null) {
                    path.unshift(vertex);
                    vertex = previous[vertex];
                }
                return path;
            }

            for (let neighbor of this.adjList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);  
                    queue.push(neighbor);
                    previous[neighbor] = vertex; // Track the path
                }
            }
        }

        return null; // If the loop finishes without finding the target, there's no path
    }
    getInDegree(vertex) {
        let inDegree = 0;
        for (let key in this.adjList) {
            if (this.adjList[key].has(vertex)) {
                inDegree++;
            }
        }
        return inDegree;
    }
}