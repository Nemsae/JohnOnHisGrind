const Graph = require('../utils/Graph')

function findRoute(graph, start, end) {
  if (start === end) return true
  let queue = [graph[start]]
  // graph[start].visited = true

  while (queue.length) {
    let currNode = queue[0]
    console.log('currNode: ', currNode);
    if (currNode.visited) {
      console.log('Visited Node')
      queue.shift()
    } else {
      for (let child in currNode) {
        console.log('child: ', child);
        if (child === end) {
          console.log('Found Child!');
          return true
        } else {
          queue.push(graph[child])
        }
      }
      currNode.visited = true
      queue.shift()
    }
  }

  return false
}

let graph = new Graph()

/* TESTS */
/* TEST 1 */
// graph.addNode('A')
// graph.addNode('B')
// graph.addNode('C')
// graph.addNode('D')
// graph.addNode('E')
//
// graph.addEdge('A', 'B')
// graph.addEdge('A', 'C')
// graph.addEdge('B', 'E')
// graph.addEdge('C', 'B')
// graph.addEdge('C', 'D')
//
// console.log('graph: ', graph);
// console.log("'A', 'A': true ", findRoute(graph.nodes, 'A', 'A')) //  true
// console.log("'A', 'D': true ", findRoute(graph.nodes, 'A', 'D')) //  true
// console.log("'D', 'E': false ", findRoute(graph.nodes, 'D', 'E')) //  false

/* TEST 2 */
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addNode('G')
graph.addNode('H')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'E')
graph.addEdge('E', 'F')
graph.addEdge('F', 'G')
graph.addEdge('G', 'B')
graph.addEdge('C', 'B')
graph.addEdge('C', 'D')
graph.addEdge('D', 'H')

console.log('graph: ', graph);
// console.log("'A', 'H': true ", findRoute(graph.nodes, 'A', 'H')) //  true
// console.log("'G', 'F': true ", findRoute(graph.nodes, 'G', 'F')) //  true
// console.log("'C', 'G': true ", findRoute(graph.nodes, 'C', 'G')) //  true
// console.log("'B', 'H': false ", findRoute(graph.nodes, 'B', 'H')) //  false
