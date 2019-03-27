var DoubleLinkedList = require("./DoubleLL.js");
var LinkedList = require("./SingleLinkedList");

function Node(data) {
  this.data = data;
  this.next = null; //node
}
/*
2.1 Remove duplicates: write code to remove duplicates from an unsorted
linked list
*/

function deleteDuplicates(linkedlist) {
  let dataTracker = [];
  let newLinkedList = new DoubleLinkedList();
  let currentNode = linkedlist.head; //node

  while (currentNode.next != null) {
    if (dataTracker.includes(currentNode.data)) {
      currentNode = currentNode.next;
    } else {
      dataTracker[currentNode.data] = currentNode.data;
      newLinkedList.addNode(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  return newLinkedList;
}

//2.2 find kth to last element of a singly linked list
//pretend like there is not a length property

function kthToLastElement(linkedlist, k) {
  let lengthPointer = linkedlist.head;
  let lengthCounter = 0;
  let kPointer = linkedlist.head;

  for (i = 0; i < k; i++) {
    if (lengthPointer.next === null) {
      return null;
    }
    lengthPointer = lengthPointer.next;
  }

  while (lengthPointer.next != null) {
    lengthPointer = lengthPointer.next;
    kPointer = kPointer.next;
  }

  return kPointer;
}

let linkers = new LinkedList();
linkers.addNode(4);
linkers.addNode(9);
linkers.addNode(19);
linkers.addNode(29);
linkers.addNode(40);
linkers.addNode(78);
// console.log(kthToLastElement(linkers, 10));
// console.log(linkers);

//2.3 Delete middle node of singly linked list
//nothing returned
//given only access to that node
//never given first or last position

LinkedList.prototype.deleteMiddleNode = function(node) {
  if (node === null || node.next === null) {
    return false;
  }

  node.data = node.next.data;
  node.next = node.next.next;
  this._length--;
};

let list = new LinkedList();
var nodeA = new Node(4);
var nodeB = new Node(8);
var nodeC = new Node(18); //deleting
var nodeD = new Node(21);
var nodeE = new Node(76);

list.addNode(nodeA);
list.addNode(nodeB);
list.addNode(nodeC);
list.addNode(nodeD);
list.addNode(nodeE);
list.deleteMiddleNode(nodeC);
// console.log(list.head.next);
//base cases are that there are 0, 1, or 2 elements in the linkedlist

//2.4 partition ==> nodes less than x go first, nodes greater than x go
//in right side, x can appear anywhere in right side

//what is big O?
//single

//track beginning and end of the left and right lists
//try implementing with double linked list tracking head and tail
function partitionList(linkedlist, partition) {
  let left = new LinkedList();
  let right = new LinkedList();
  let currentNode = linkedlist.head;

  if (currentNode === null || currentNode.next === null) {
    return false;
  }

  do {
    currentNode = currentNode.next;
    if (currentNode.data < partition) {
      left.addNode(currentNode);
    } else {
      right.addNode(currentNode);
    }
  } while (current.data != null);
}
