const BinaryTree = require("./BinaryTree");

// create a BinaryTree here
//const bt = new BinaryTree(15);
//console.log(bt);

// 2/5 Inserting a value
/* bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25); 

console.log(bt);
*/

// 3/5 Retrieve a Node by Value
//console.log(bt.getNodeByValue(75));
//console.log(bt.getNodeByValue(55));

// 4/5 Traversing a Binary Tree
/* const bt = new BinaryTree(15);
let numbers = [12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25];

for (let i = 0; i < numbers.length; i++) {
  bt.insert(numbers[i]);
  console.log(`Insert ${numbers[i]} to binary tree`);
}

console.log("Depth First Traversal");
bt.depthFirstTraversal(); */

// 5/5 Review
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log("Depth First Traversal");
bt.depthFirstTraversal();
