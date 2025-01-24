class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=new Set()
        }
    }
    addEdge(vertex1,vertex2,weight=1){
        if(!this.adjList[vertex1])this.addVertex(vertex1);
        if(!this.adjList[vertex2])this.addVertex(vertex2);
        
        this.adjList[vertex1].add({vertex:vertex2,weight});
        this.adjList[vertex2].add({vertex:vertex1,weight});
    }
    display(){
        for(let vertex in this.adjList){
            console.log(vertex + "==>" + [...this.adjList[vertex]].map((edge)=>`${edge.vertex} (${edge.weight})`));
        }
    }
    
    getMinimumSpanningTree(start){
        const mst=[];
        const visited = new Set();
        const priorityQueue=[];
        
        const addEdge=(vertex)=>{
            visited.add(vertex);
            for(let neighbor of this.adjList[vertex]){
                if(!visited.has(neighbor.vertex)){
                    priorityQueue.push({
                        from:vertex,
                        to:neighbor.vertex,
                        weight:neighbor.weight,
                    });
                }
            }
        };
        addEdge(start);
        while(priorityQueue.length>0){
            priorityQueue.sort((a,b)=>a.weight - b.weight);
            const edge= priorityQueue.shift();
            if(!visited.has(edge.to)){
                mst.push(edge);
                addEdge(edge.to);
            }
        }
        return mst
    }
    
}
const graph =new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A","B",10)
graph.addEdge("A","C",22)
graph.addEdge("A","D",30)
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 3);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 4);
graph.addEdge("D", "E", 2);
graph.addEdge("E", "C", 6);
graph.display()
const mst = graph.getMinimumSpanningTree("A");
console.log("\nMinimum Spanning Tree:");
mst.forEach((edge) =>
    console.log(`Edge: ${edge.from} - ${edge.to}, Weight: ${edge.weight}`)
);
