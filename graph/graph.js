class Graph{
    constructor(){
        this.adjList={}
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1])this.addVertex(vertex1)
        if(!this.adjList[vertex2])this.addVertex(vertex2)
           
        this.adjList[vertex1].add(vertex2)&&
        this.adjList[vertex2].add(vertex1)
            
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjList[vertex1].has(vertex2)&&
            this.adjList[vertex2].has(vertex1)
        )
    }
    deleteEdge(vertex1,vertex2){
        return(
            this.adjList[vertex1].delete(vertex2)&&
            this.adjList[vertex2].delete(vertex1)

        )
    }
    deleteVertex(vertex){
        if(this.adjList[vertex]){
            for(let adjVertex of this.adjList[vertex]){
                this.deleteEdge(vertex,adjVertex)
            }
        }
        delete this.adjList[vertex]
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex +"===>"+[...this.adjList[vertex]]);
            
        }
    }
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

}

