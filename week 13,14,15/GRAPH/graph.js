class Graph{
    constructor(){
        this.adjacencyList = {}//Adjacency List: {}

    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
                this.addVertex(vertex1)
        }
         if (!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].delete(vertex2)
                         &&
                this.adjacencyList[vertex2].delete(vertex1))
    }
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            for (let adjacentVertex of this.adjacencyList[vertex]) {
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }
    display(){
        for( let vertex in this.adjacencyList){
            console.log(vertex + "->"+[...this.adjacencyList[vertex]])
        }
    }
    dfs(start, visited = new Set()) {
        visited.add(start);
        console.log(start);

        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        visited.add(start);

        while (queue.length) {
            const vertex = queue.shift();
            console.log(vertex);

            for (let neighbor of this.adjacencyList[vertex]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}




const graph = new Graph()
graph.addVertex('A')//Adjacency List: { 'A': {} }

graph.addVertex('B') //Adjacency List: { 'A': {}, 'B': {} }

graph.addVertex('C')   //Adjacency List: { 'A': {}, 'B': {}, 'C': {} }

graph.addEdge("A","B") 
// Adjacency List: { 
//     'A': { 'B' }, 
//     'B': { 'A' }, 
//     'C': {} 
//   }
  
graph.addEdge("B","C")
// Adjacency List: { 
//     'A': { 'B' }, 
//     'B': { 'A', 'C' }, 
//     'C': { 'B' } 
//   }
  

graph.display()
// Adjacency List: { 
//     'A': { 'B' }, 
//     'B': { 'A', 'C' }, 
//     'C': { 'B' } 
//   }
  
console.log(graph.hasEdge('A','B'))
// graph.removeEdge("A","B")

graph.display()

console.log("DFS Traversal:");graph.dfs('A') //DFS Traversal: A -> B -> C
// A (visited) -> [B (visited)]
// B (visited) -> [A (visited), C (visited)]
// C (visited) -> [B (visited)]

console.log("BFS Traversal:");graph.bfs('A') //BFS Traversal: A -> B -> C

// A (visited) -> [B (visited)]
// B (visited) -> [A (visited), C (visited)]
// C (visited) -> [B (visited)]


// The adjacencyList would look like this:
// {
//     'A': new Set(['B']),   // A is connected to B
//     'B': new Set(['A', 'C']),  // B is connected to A and C
//     'C': new Set(['B'])    // C is connected to B
//   }



// this.adjacencyList['A']:

// This represents the set of vertices connected to vertex 'A'.
// Output: Set(['B'])
// It indicates that vertex 'A' is connected to vertex 'B'.
// this.adjacencyList['B']:

// This represents the set of vertices connected to vertex 'B'.
// Output: Set(['A', 'C'])
// It indicates that vertex 'B' is connected to both 'A' and 'C'.

//    A
//   / \
//  B   C
//   \ / \
//    D   E

// this.adj = {
//     'A': ['B', 'C'],
//     'B': ['A', 'D'],
//     'C': ['A', 'D', 'E'],
//     'D': ['B', 'C'],
//     'E': ['C']
//   }
  
//   dfs
//we user stack to backtrack

// Visit A.
// Mark A as visited: visit = {A}
// Neighbors: B, C



// 2. **Move to `B`** (first unvisited neighbor of `A`):
// - Visit `B`.
// - Mark `B` as visited: `visit = {A, B}`
// - Neighbors: `A`, `D`


// 3. **Move to `D`** (first unvisited neighbor of `B`):
// - Visit `D`.
// - Mark `D` as visited: `visit = {A, B, D}`
// - Neighbors: `B`, `C`


// 5. **Move to `E`** (first unvisited neighbor of `C`):
// - Visit `E`.
// - Mark `E` as visited: `visit = {A, B, D, C, E}`
// - Neighbors: `C`


// BFS
// Visit A.
// Mark A as visited: visited = {A}
// Neighbors: B, C (Add to queue)
// Queue: [B, C]


// 2. **Dequeue `B`**:
// - Visit `B`.
// - Mark `B` as visited: `visited = {A, B}`
// - Neighbors: `A`, `D` (Add `D` to queue, `A` is already visited)
// - Queue: `[C, D]`


// 3. **Dequeue `C`**:
// - Visit `C`.
// - Mark `C` as visited: `visited = {A, B, C}`
// - Neighbors: `A`, `D`, `E` (Add `E` to queue, `A` and `D` are already visited)
// - Queue: `[D, E]`


// 4. **Dequeue `D`**:
// - Visit `D`.
// - Mark `D` as visited: `visited = {A, B, C, D}`
// - Neighbors: `B`, `C` (both already visited)
// - Queue: `[E]`



// 5. **Dequeue `E`**:
// - Visit `E`.
// - Mark `E` as visited: `visited = {A, B, C, D, E}`
// - Neighbors: `C` (already visited)
// - Queue: `[]`


// ### Summary:

// - **DFS** (Depth-First Search) explores as far down a branch as possible before backtracking, following a path from the root to the deepest unvisited node.
// - **BFS** (Breadth-First Search) explores all neighbors of a node before moving on to the next level, ensuring that nodes are visited in layers.

// Both traversal methods are useful for exploring different aspects of a graph, such as finding paths, checking connectivity, or discovering all possible routes.
