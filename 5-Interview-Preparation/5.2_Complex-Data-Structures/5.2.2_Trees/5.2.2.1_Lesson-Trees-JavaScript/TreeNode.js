class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  // 2/7 Adding a child
  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  // 3/7 Removing a child
  removeChild(childToRemove) {
    const length = this.children.length;
    this.children = this.children.filter((child) => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return child.data !== childToRemove;
      }
    });

    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  // 4/7  Pretty Print
  print(level = 0) {
    let result = "";
    for (let i = 0; i < level; i++) {
      result += "-- ";
    }
    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }

  // 5/7 Depth-first Tree Traversal
  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  // 6/7 Bredth-first Tree Traversal
  breadthFirstTraversal() {
    let queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}

module.exports = TreeNode;
