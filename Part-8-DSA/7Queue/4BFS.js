// BFS Concept (Breadth-First Search) - BFS is a traversal algorithm for Graphs and Trees. It explores the graph level by level, radiating outward from the starting node. It fundamentally relies on a Queue to keep track of the next nodes to visit.

// Graph representation using an Adjacency List
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

function bfs(graph, startNode) {
  // In a real interview, you can use a JS array for the queue for brevity, 
  // but mention the O(N) shift cost to the interviewer.
  let queue = [startNode]; 
  let visited = new Set(); // Set ensures we don't visit nodes twice
  visited.add(startNode);
  
  let result = [];

  while (queue.length > 0) {
    // Dequeue the front element
    let currentNode = queue.shift(); 
    result.push(currentNode);

    // Get all neighbors of the current node
    let neighbors = graph[currentNode];

    // Iterate through neighbors
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue the unvisited neighbor
      }
    }
  }

  return result;
}

console.log(bfs(graph, 'A')); 
// Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]