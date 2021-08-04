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
}

var tree = new BinarySearchTree ();
// tree.root = new Node (10);
tree.insert (10);
tree.insert (13);
tree.insert (13);
tree.insert (7);
tree.insert (6);
tree.insert (3);
const a = tree.find (16);
// tree.root.right = new Node(15)
// tree.root.right = new Node(7)

console.log (a);

// // BIG O notation
// insert O(log n)
// search O(log n)

// Bread first search
// depth first search( In-order, pre-order, post-order)
