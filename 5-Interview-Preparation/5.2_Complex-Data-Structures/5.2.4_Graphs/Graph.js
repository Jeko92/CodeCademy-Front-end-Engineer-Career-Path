const Edge = require("./Edge.js");
const Vertex = require("./Vertex.js");

class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  // 2/8 Adding Vertices
  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);
    console.log(`Vertex ${newVertex} has bees successfully added!`);
    return newVertex;
  }

  // 3/8 Removing Vertices
  removeVertex(vertex) {
    this.vertices = this.vertices.filter((v) => v !== vertex);
  }

  // 4/8 Connecting Vertices with Edges
  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);
      // 7/8 Directed Graphs
      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  // 5/8 Removing Vertex Connections
  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);
      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error("Expecged Vertex arguments.");
    }
  }

  // 6/8 Weighted Graphs

  print() {
    /* const vertexList = this.vertices || [];
    vertexList.forEach((vertex) => vertex.print()); */
    this.vertices.forEach((vertex) => vertex.print());
  }
}

//const trainNetwork = new Graph();
//const trainNetwork = new Graph(true);
//const trainNetwork = new Graph(false, true);
//const atlantaStation = trainNetwork.addVertex("Atlanta");
//const newYorkStation = trainNetwork.addVertex("New York");

//trainNetwork.removeVertex(atlantaStation);
//trainNetwork.addEdge(atlantaStation, newYorkStation);
//trainNetwork.removeEdge(atlantaStation, newYorkStation);

//trainNetwork.addEdge(atlantaStation, newYorkStation, 800);
//trainNetwork.addEdge(atlantaStation, newYorkStation);
//trainNetwork.removeEdge(atlantaStation, newYorkStation);
//rainNetwork.print();

module.exports = Graph;
