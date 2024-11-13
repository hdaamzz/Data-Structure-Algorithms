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
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    deleteEdge(vertex1,vertex2){
       return(
        this.adjList[vertex1].delete(vertex2)&&
        this.adjList[vertex2].delete(vertex1)
       )
    }
    deleteVertex(vertex){
        if(this.adjList[vertex]){
            for(let ver of this.adjList[vertex]){
                this.deleteEdge(ver,vertex)
            }
            delete this.adjList[vertex]
        }
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjList[vertex1].has(vertex2)&&
            this.adjList[vertex2].has(vertex1)
        )
    }
    display(){
        for(let ver in this.adjList){
            console.log(ver+"==>"+[...this.adjList[ver]]);
            
        }
    }

    DFS(vertex,visited=new Set()){
        visited.add(vertex);
        console.log(vertex);
        for(let neighbour of this.adjList[vertex]){
            if(!visited.has(neighbour)){
                this.DFS(neighbour,visited)
            }
        }
        
    }
    BFS(start){
        let visited=new Set();
        let queue=[start];
        visited.add(start);

        while(queue.length>0){
            let vertex = queue.shift()
            console.log(vertex);
            
            for(let neighbour of this.adjList[vertex] ){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }

}

const graph =new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D");


graph.BFS("B")


