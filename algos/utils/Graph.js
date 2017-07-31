const Graph = function () {
  this.nodes = {}
}

Graph.prototype.addEdge = function(node, edge) {
  if (this.nodes[node][edge] !== undefined) {
    return `Edge from ${node} to ${edge} already exists!`
  } else if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist!`
  } else {
    this.nodes[node][edge] = true
  }
}

Graph.prototype.addNode = function(node) {
  if (this.nodes[node] !== undefined) {
    return `Node ${node} already exists!`
  } else {
    this.nodes[node] = {}
  }
}

Graph.prototype.findEdges = function(node) {
  if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist!`
  } else {
    return this.nodes[node]
  }
}

Graph.prototype.hasEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist!`
  } else if (this.nodes[node][edge] === undefined) {
    return `Edge from ${node} to ${edge} does not exist`
  } else {
    return this.nodes[node][edge] !== undefined
  }
}

Graph.prototype.hasNode = function(node) {
  if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist.`
  } else {
    return this.nodes[node] !== undefined
  }
}

Graph.prototype.removeEdge = function(node, edge) {
  if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist.`
  } else if (this.nodes[node][edge] === undefined) {
    return `Edge from ${node} to ${edge} does not exist`
  } else {
    delete this.nodes[node][edge]
  }
}

Graph.prototype.removeNode = function(node) {
  if (this.nodes[node] === undefined) {
    return `Node ${node} does not exist.`
  } else {
    //  delete node and its references
    delete this.nodes[node]
    for (let currNode in this.nodes) {
      if (this.nodes[currNode][node] !== undefined) {
        delete this.nodes[currNode][node]
      }
    }
  }
}

Graph.prototype.removeFlags = function() {
  for (let currNode in this.nodes) {
    if (this.nodes[currNode].visited) {
      delete this.nodes[currNode].visited
    }
  }
}

module.exports = Graph

/* TESTS */
var graph = new Graph()
graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'E')
graph.addEdge('C', 'B')
graph.addEdge('C', 'D')
console.log('graph: ', graph)
console.log('findEdges("C"): ', graph.findEdges("C"))
console.log("hasEdge('C', 'B'): ", graph.hasEdge('C', 'B'))
graph.removeEdge('C', 'B')
console.log('graph: ', graph)
console.log("hasEdge('C', 'B'): ", graph.hasEdge('C', 'B'))
console.log("hasNode('C'): ", graph.hasNode('C'))
graph.removeNode('C')
console.log('graph: ', graph)
console.log("hasNode('C'): ", graph.hasNode('C'))
