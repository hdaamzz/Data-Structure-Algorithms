const adjacencyList = new Map()

//add Node

function  addVertex(airport){
    adjacencyList.set(airport,[])
}
//add edge undirected

function addEdge(origin,destination){
    adjacencyList.get(origin).push(destination)
    adjacencyList.get(destination).push(origin)
}

addVertex('JFK')
addVertex('LAX')
addVertex('ATL')
addVertex('ORD')
addEdge('JFK', 'LAX')
addEdge('JFK', 'ATL')
addEdge('ATL', 'ORD')
addEdge('LAX', 'ORD')
//create a grpah

airport.forEach(addNode);
routes.forEach(route=>addEdge(...route))




console.log(adjacencyList)
