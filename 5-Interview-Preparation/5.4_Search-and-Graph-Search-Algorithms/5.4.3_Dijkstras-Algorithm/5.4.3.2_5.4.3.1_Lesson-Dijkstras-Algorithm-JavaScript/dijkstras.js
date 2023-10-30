const PriorityQueue = require("./PriorityQueue.js");
const testGraph = require("./testGraph.js");

const dijkstras = (graph, startingVertex) => {
  // 1/5 Setup
  const distances = {};
  let previous = {};

  // 3/5 Evaluate All Paths
  const queue = new PriorityQueue();
  queue.add({ vertex: startingVertex, priority: 0 });

  graph.vertices.forEach((vertex) => {
    distances[vertex.data] = Infinity;
    previous[vertex.data] = null;
  });
  distances[startingVertex.data] = 0;

  // 2/5 Evaluate Paths to Starting Vertex’s Neighbors
  /* const vertex = startingVertex;
  vertex.edges.forEach((edge) => {
    const alternate = edge.weight + distances[vertex.data];
    const neighborValue = edge.end.data;

    if (alternate < distances[neighborValue]) {
      distances[neighborValue] = alternate;
      previous[neighborValue] = vertex;
    }
  }); */

  // 3/5 Evaluate All Paths
  while (!queue.isEmpty()) {
    const { vertex } = queue.popMin();

    vertex.edges.forEach((edge) => {
      const alternate = edge.weight + distances[vertex.data];
      const neighborValue = edge.end.data;

      if (alternate < distances[neighborValue]) {
        distances[neighborValue] = alternate;
        previous[neighborValue] = vertex;

        queue.add({ vertex: edge.end, priority: distances[neighborValue] });
      }
    });
  }

  return { distances, previous };
};

const results = dijkstras(testGraph, testGraph.vertices[0]);
// console.log(results);

module.exports = dijkstras;
