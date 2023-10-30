class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  sortedArrayToBST(nums) {
    const build = (l, r) => {
      if (l > r) {
        return null;
      }
      const m = Math.floor((l + r) / 2);
      const node = new TreeNode(nums[m]);
      node.left = build(l, m - 1);
      node.right = build(m + 1, r);
      return node;
    };

    return build(0, nums.length - 1);
  }

  // Helper function to convert the BST to a serializable format (array)
  treeToArray(root) {
    if (!root) return null;
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode) {
        result.push(currentNode.val);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      } else {
        result.push(null);
      }
    }

    // Remove any trailing null values from the result
    while (result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }
}

// Example usage:
const solution = new Solution();
const nums = [-10, -3, 0, 5, 9]; // Replace this with your sorted array
const resultBST = solution.sortedArrayToBST(nums);
console.log(resultBST);
const serializedTree = solution.treeToArray(resultBST);
console.log(serializedTree); // Output the array representation of the constructed BST
