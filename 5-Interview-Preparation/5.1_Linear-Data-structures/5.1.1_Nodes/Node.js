// 1/5 Introduction: Nodes in JavaScript

/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node(13);
console.log(firstNode.data);
console.log(firstNode.next);
 */

// 2/5 Node Methods: Set Next Node

/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    this.next = node;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node(13);
firstNode.setNextNode(secondNode);
console.log(firstNode); */

// 3/5 Node Methods: Set Next Node Validation
/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Pointer must be pointed to Node");
    }
  }
}

const firstNode = new Node("I am an instance of a Node!");
firstNode.setNextNode(12); */

// 4/5 Node Methods: Get Next Node
/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const firstNode = new Node("I am an instance of a Node!");
const secondNode = new Node("I am the next Node!");
firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode()); */

// 5/5 Review: Nodes in JavaScript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Next node must be a member of the Node class.");
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node("Berry Tasty");
const vanillaNode = new Node("Vanilla");
const coconutNode = new Node("Coconuts for Coconut");

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

const oldest = new Node("John");
const middle = new Node("Jacob");
const youngest = new Node("Jingleheimer");

youngest.setNextNode(middle);
middle.setNextNode(oldest);

let currentSibling = youngest;
let oldestName = "";
while (currentSibling !== null) {
  oldestName = currentSibling.data;
  currentSibling = currentSibling.getNextNode();
}

console.log(`There goes ${oldestName} Schmidt!`);
