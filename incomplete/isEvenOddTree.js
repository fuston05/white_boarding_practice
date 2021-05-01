// leetCode challenge (med)
// isEvenOddTree

// A binary tree is named Even-Odd if it meets the following conditions:

// The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
// For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
// For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
// Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
  const q = [1]; //<- front of queue
  const visited = new Set();

  console.log("test: ", root);

  // while (q.length) {
    // dequeue'
    // add to visited IF not already in visited
    // add its neighbors to the Q
    // console.log('cur: ')
    // return;
  // }
};

// Example 1:
let root = [TreeNode(1, TreeNode(10, TreeNode(3, TreeNode(12), TreeNode(8)), null), TreeNode(4, TreeNode(7, TreeNode(6), null), TreeNode(9, null, TreeNode(2))))];
// Output: true
// Explanation: The node values on each level are:
// Level 0: [1]
// Level 1: [10,4]
// Level 2: [3,7,9]
// Level 3: [12,8,6,2]
// Since levels 0 and 2 are all odd and increasing, and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.

// Example 2:
// let root = [5,4,2,3,3,7]
// Output: false
// Explanation: The node values on each level are:
// Level 0: [5]
// Level 1: [4,2]
// Level 2: [3,3,7]
// Node values in the level 2 must be in strictly increasing order, so the tree is not Even-Odd.

// Example 3:
// let root = [5,9,1,3,5,7]
// Output: false
// Explanation: Node values in the level 1 should be even integers.

// Example 4:
// let root = [1]
// Output: true

// Example 5:
// let root = [11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17]
// Output: true

// Constraints:
// The number of nodes in the tree is in the range [1, 105].
// 1 <= Node.val <= 106

isEvenOddTree(root);
