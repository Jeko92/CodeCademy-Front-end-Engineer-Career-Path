const TreeNode = require("./TreeNode");

const tree = new TreeNode(1);
//console.log(tree);
/* 
tree.addChild(15);
//console.log(tree);

const node = new TreeNode(30);
tree.addChild(node);
//console.log(tree);

console.log(tree);

tree.removeChild(15);
console.log(tree);

tree.removeChild(node);
console.log(tree); */

const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
//tree.print();

//tree.print();
//tree.depthFirstTraversal();

//tree.breadthFirstTraversal();

const menu = new TreeNode("Menu");

const entries = {
  Breakfast: ["Cereal", "BBQ Chicken", "Oatmeal"],
  Lunch: ["Soup", "Sandwich", "Lasagna"],
  Dinner: ["Yogurt", "Filet Mignon", "Fish Florentine"],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach((entry) => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();

menu.depthFirstTraversal();
