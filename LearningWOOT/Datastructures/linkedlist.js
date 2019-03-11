/*
REVIEW ==> error message classes

Linked Lists imposter's handbook

Two types: singly and doubly linked

Singly ==> has a set of nodes in memory that have two elements
1. the value you want to store
2. a pointer to the next node in line

Doubly linked list ==> same but has an additional pointer to the 
previous node

******Operations*****
Nodes that point to each other don't need to live next to each other
Can grow and shrink as necessary

you can insert values into the middle of the list by resetting a few pointers
same with deleting

Downside: to find item you want requires traversing the list O(n)
Arrays let you do O(1) if you know the index

Linked lists null terminated ==> if a node's pointer is null that's the end of the
list

First item in LL is the head
the rest is the tail

Benefit: ability to grow and shrink as necessary
Iteration thought of as traversal because you don't know when LL will end
might end up using a while loop


https://www.geeksforgeeks.org/data-structures/linked-list/
Linear data structure, elements not stored at contiguous memory locations
    Instead items linked using pointers 
    Linked list contains nodes where each node contains a data field and a reference (link)
    to the next node in the list

Like array: is linear
Unlike array: linked elements not stored at contiguous locations, instead use pointers

General challenges of arrays
    Size of the array is fixed
    Hard to insert into an array because you must move all items to the right -- shift

Benefits of linked list:
    Dynamic size
    Ease of insertion/deletion

Problems of LL:
    random access not easy
        can't do binary search, instead access elements sequentially from first node
    Extra memory space required for the pointer
    Not cache friendly

Head is the first node 
Each note has data and a pointer/reference to the next node
Tail is a node for the final value of the list
    single doesn't note the tail but double does
    single doesn't track previous but double does

https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
*/

//remem no classes in javascript
//so in java it would have been
//  class linkedlist
//      Node head;
//      node class /constructor

//********SINGLY LINKED LIST*************

//Node has data and pointer to next item
function Node(data) {
  this.data = data;
  this.next = null; //node
}

function LinkedList() {
  this.head = null; //node
  this._length = 0; //number of nodes, every instance of LL doesn't necessarily start
  //with a node so we initialize with null and 0
}

LinkedList.prototype.addNode = function(value) {
  const newNode = new Node(value);
  let currentNode = this.head;

  if (this._length == 0) {
    this.head = newNode;
    this._length++;
    return newNode;
  }

  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
  this._length++;
  return newNode;
};

//position starts at 1
LinkedList.prototype.search = function(position) {
  let counter = 1;
  let currentNode = this.head;

  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === 1) {
    return currentNode;
  }
  while (counter < position) {
    currentNode = currentNode.next; //this.head.next
    counter++; //2
  }
  return currentNode;
};

LinkedList.prototype.remove = function(position) {
  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === this._length) {
    this.head = null;
    this._length--;
  } else {
    this.search(position - 1).next = this.search(position + 1);
    this._length--;
  }
};

LinkedList.prototype.insertAt = function(position, node) {
  node.next = this.search(position + 1);
  this.search(position - 1).next = node;
  this._length++;
};

// let weLoveList = new LinkedList();
// weLoveList.addNode("first");
// weLoveList.addNode("second");
// weLoveList.addNode("third");
// weLoveList.addNode("four");
// console.log(weLoveList.head.next.next);
//console.log(weLoveList.search(2));
// console.log(weLoveList.remove(3));
// console.log(weLoveList.head.next.next); //should say four
// console.log(weLoveList.insertAt(3, new Node("five")));
// console.log(weLoveList.search(3));

//addNode is O(1) because you just drop at end of list

//******** */DOUBLY LINKED LIST ==> NEXT AND PREVIOUS*********
//https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54

//every instance of double LL is instantiated without nodes
//so default values for tail and head set to null
function DoubleNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this._length = 0;
}

//add to END
DoubleLinkedList.prototype.addNode = function(value) {
  const newNode = new DoubleNode(value);

  if (this._length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
  //don't have to iterate through every item because we can use tail to access
  this._length++;
};

//position starts at 1
//same as single
DoubleLinkedList.prototype.search = function(position) {
  let counter = 1;
  let currentNode = this.head;

  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === 1) {
    return currentNode;
  }
  while (counter < position) {
    currentNode = currentNode.next; //this.head.next
    counter++; //2
  }
  return currentNode;
};

//you want to remove at the head
//this.head and this.tail equal the same thing

//revisit tomorrow
DoubleLinkedList.prototype.remove = function(position) {
  if (position < 1 || this._length === 0 || position > this._length) {
    return Error(message.failure);
  } else if (position === this._length) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else if (position === 1) {
    this.head = null;
    this.tail = null;
  } else {
    this.search(position - 1).next = this.search(position + 1);
    this.search(position + 1).prev = this.search(position - 1);
  }
  this._length--;
};

let DLL = new DoubleLinkedList();
DLL.addNode("first");
DLL.addNode("second");
console.log(DLL);
