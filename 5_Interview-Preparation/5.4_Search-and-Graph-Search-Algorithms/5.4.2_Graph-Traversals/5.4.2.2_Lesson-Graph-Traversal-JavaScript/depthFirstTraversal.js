const testGraph = require("./testGraph.js");

// const depthFirstTraversal = (start, visitedVertices = [start]) => {
const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  //   console.log(start.data);
  // 1/5 Depth-First Traversal (One path)
  /* if (start.edges.length) {
    const neighbor = start.edges[0].end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  } */
  // 2/5 Depth-First Traversal (All paths)
  /* start.edges.forEach((edge) => {
    let neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, visitedVertices);
    }
  }); */
  // 3/5 Depth-First Traversal (Callbacks)
  callback(start);
  start.edges.forEach((edge) => {
    let neighbor = edge.end;
    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

// depthFirstTraversal(testGraph.vertices[0]);
depthFirstTraversal(testGraph.vertices[0], (vertex) => {
  console.log(vertex.data);
});
