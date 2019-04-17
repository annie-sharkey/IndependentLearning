/*
Binary tree -- each node has up to two children
Not every tree is binary

Leaf is a node with no children

Not all binary trees are binary search trees
    Binary search tree is where all descendants to the left are less than the node
    above it and to the right are greater



complete binary tree: every level of tree is filled except sometimes the last level
    if last level not full then it it fills left to right

full binary tree: every node has either zero or two children

perfect binary tree: both full and complete
    perfect trees are rare because they must have 2^k -1 nodes


**Binary tree traversal**
in order: left branch, current node, right branch
    if binary -search- tree then it prints nodes in ascending order
pre order: current node then child node, root always first visited
    print node then left then right
post order: visits current node after child nodes ==> root last visited


*/
//implement binary search tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinSearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    var currentNode = this.root;
    while (currentNode !== null) {
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        } else {
          currentNode = currentNode.left;
        }
      } else if (newNode.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        } else {
          currentNode = currentNode.right;
        }
      } else {
        return "No duplicate values allowed";
      }
    }
  }
}

//REMEMBER: the following refer to placement of when we print node.data
//left always goes before right

BinSearchTree.prototype.inorderTraverse = node => {
  if (node != null) {
    inorderTraverse(node.left);
    console.log(node.data);
    inorderTraverse(node.right);
  }
};

BinSearchTree.prototype.preorderTraverse = node => {
  if (node !== null) {
    console.log(node.data);
    preorderTraverse(node.left);
    preorderTraverse(node.right);
  }
};

// function preorderTraverse(node) {
//   if (node !== null) {
//     console.log(node.data);
//     preorderTraverse(node.left);
//     preorderTraverse(node.right);
//   }
// }

function postorderTraverse(node) {
  if (node !== null) {
    postorderTraverse(node.left);
    postorderTraverse(node.right);
    console.log(node.data);
  }
}

module.exports = BinSearchTree;

// var trees = new BinSearchTree();
// trees.insert(4);
// trees.insert(8);
// trees.insert(11);
// trees.insert(2);
// trees.insert(12);
// trees.insert(6);
// trees.insert(1);
// trees.insert(10);
// console.log(trees);

// // inorderTraverse(trees.root);
// // preorderTraverse(trees.root);
// postorderTraverse(trees.root);
