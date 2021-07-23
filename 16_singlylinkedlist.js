class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push (val) {
    var newNode = new Node (val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //   traverse () {
  //     var current = this.head;
  //     while (current) {
  //       console.log (current.val);
  //       current = current.next;
  //     }
  // }

  pop () {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift () {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift (val) {
    var newNode = new Node (val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set (index, val) {
    var foundNode = this.get (index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert (index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push (val);
    if (index === 0) return this.unshift (val);

    var newNode = new Node (val);
    var prev = this.get (index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove (index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop ();
    if (index === 0) return this.shift ();

    var prev = this.get (index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  print () {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push (current.val);
      current = current.next;
    }
    console.log (arr);
  }

  reverse () {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      node = next;
    }
    return this;
  }
}
// var first = new Node('hi')
// first.next = new Node('Aahva')
// first.next.next = new Node('Murthy')
// console.log(first)

const list = new SinglyLinkedList ();
list.push ('hello');
list.push ('good bye');
list.push ('!');
list.unshift ('murthyyyy');
console.log (list);
console.log (list.get (0));
list.set (0, 'suchi');
console.log (list.get (0));
list.insert (0, 'Very FIRST');
console.log (list.get (0));
list.remove (0);
console.log (list.get (0));
console.log (list.print ());
console.log (list.reverse ());
// list.shift ();
// console.log (list);
// list.shift ();
// console.log (list);
// list.shift ();
// console.log (list);

// BIg O notation

// insert O(1)
// remove O(1) or O(N)
// search O(N)
// access O(N)
