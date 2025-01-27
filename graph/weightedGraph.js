class WeightedGraph {
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Map()
        }
    }
    addEdge(vertex1,vertex2,weight=1){
        if(!this.adjList[vertex1])this.addVertex(vertex1);
        if(!this.adjList[vertex2])this.addVertex(vertex2);
        
        this.adjList[vertex1].set(vertex2,weight)
        this.adjList[vertex2].set(vertex1,weight);
    }
    hasEdge(vertex1,vertex2){
        return (this.adjList[vertex1].has(vertex2)&& this.adjList[vertex2].has(vertex1));
    }
    getWeight(vertex1,weight2){
        if(this.hasEdge(vertex1,vertex2)){
            return this.adjList[vertex1].get(vertex2);
        }
        return null
    }
    deleteEdge(vertex1,vertex2){
        if(this.hasEdge(vertex1,vertex2)){
            this.adjList[vertex1].delete(vertex2);
            this.adjList[vertex2].delete(vertex1);
            return true
        }
        return false
    }
    deleteVertex(vertex){
        if(this.adjList[vertex]){
            for(let neighbor of this.adjList[vertex].keys()){
                this.deleteEdge(nighbor,vertex)
            }
            delete this.adjList[vertex]
        }
    }
    display(){
        for(let vertex in this.adjList){
            const edges=[];
            for(let [neighbor,weight] of this.adjList[vertex].entries()){
                edges.push(`${neighbor}(${weight})`);
            }
            console.log(vertex + "==> "+edges.join(", "));
        }
    }
}

const graph = new WeightedGraph();

// Add vertices and edges
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B",5);
graph.addEdge("A", "C",3);
graph.addEdge("B", "C",8);


graph.display()