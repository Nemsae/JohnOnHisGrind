const Graph = require('../utils/Graph')

function findRoute(graph, start, end) {
  if (start === end) return true
  let queue = [graph[start]]

  while (queue.length) {
    let currNode = queue[0]
    if (currNode.visited) {
      queue.shift()
    } else {
      for (let child in currNode) {
        if (child === end) {
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
console.log("'A', 'H': true ", findRoute(graph.nodes, 'A', 'H')) //  true
graph.removeFlags()
console.log("'G', 'F': true ", findRoute(graph.nodes, 'G', 'F')) //  true
graph.removeFlags()
console.log("'C', 'G': true ", findRoute(graph.nodes, 'C', 'G')) //  true
graph.removeFlags()
console.log("'B', 'H': false ", findRoute(graph.nodes, 'B', 'H')) //  false
