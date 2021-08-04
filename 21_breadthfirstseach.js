// trees are non linear data structures
// in binary tree atmost it has only 2 childrens

// in binary search tree, left is always lesser than parent 
  // and right is greater than parent

  // we can searchthrough trees using BFS and DFS

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert (value) {
    var node = new Node (value);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) {
          return undefined;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find (value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  //breadth first variants

  BFS () {
    var node = this.root, data = [], queue = [];
    queue.push (node);
    while (queue.length) {
      node = queue.shift ();
      data.push (node.value);
      if (node.left) queue.push (node.left);
      if (node.right) queue.push (node.right);
    }
    return data;
  }

  // depth first variants

  DFSPreOrder () {
    var data = [];
    function traverse (node) {
      data.push (node.value);
      if (node.left) traverse (node.left);
      if (node.right) traverse (node.right);
    }
    traverse (this.root);
    return data;
  }

  DFSPostOrder () {
    var data = [];
    function traverse (node) {
      if (node.left) traverse (node.left);
      if (node.right) traverse (node.right);
      data.push (node.value);
    }
    traverse (this.root);
    return data;
  }

  // everything is in order of the elements that means, in binary tree, left is always lesser than parent 
  // and right is greater than parent


  DFSInOrder () {
    var data = [];
    function traverse (node) {
      if (node.left) traverse (node.left);
      data.push (node.value);
      if (node.right) traverse (node.right);
    }
    traverse (this.root);
    return data;
  }
}

//         10
//     7        13
//   6       12    15
//  3

var tree = new BinarySearchTree ();
// tree.root = new Node (10);
tree.insert (10);
tree.insert (13);
tree.insert (15);
tree.insert (12);
tree.insert (13);
tree.insert (7);
tree.insert (6);
tree.insert (3);
// const a = tree.find (7);
// tree.root.right = new Node(15)
// tree.root.right = new Node(7)

// console.log (a);
console.log (tree.BFS ());
console.log (tree.DFSPreOrder ());
console.log (tree.DFSPostOrder ());
console.log (tree.DFSInOrder ());
// // BIG O notation
// insert O(log n)
// search O(log n)

// Bread first search
// depth first search( In-order, pre-order, post-order)
