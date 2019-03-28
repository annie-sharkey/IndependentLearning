var DoubleLinkedList = require("./DoubleLL.js");
var LinkedList = require("./SingleLinkedList");

function Node(data) {
  this.data = data;
  this.next = null; //node
}

function DoubleNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
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

// let linkers = new LinkedList();
// linkers.addNode(4);
// linkers.addNode(9);
// linkers.addNode(19);
// linkers.addNode(29);
// linkers.addNode(40);
// linkers.addNode(78);
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

// let list = new LinkedList();
// var nodeA = new Node(4);
// var nodeB = new Node(8);
// var nodeC = new Node(18); //deleting
// var nodeD = new Node(21);
// var nodeE = new Node(76);

// list.addNode(nodeA);
// list.addNode(nodeB);
// list.addNode(nodeC);
// list.addNode(nodeD);
// list.addNode(nodeE);
// list.deleteMiddleNode(nodeC);
// console.log(list.head.next);
//base cases are that there are 0, 1, or 2 elements in the linkedlist

//2.4 partition ==> nodes less than x go first, nodes greater than x go
//in right side, x can appear anywhere in right side

function betterPartition(linkedlist, partition) {
  var partitionedList = new LinkedList();
  var lastLeftNode = null;
  var firstRightNode = null;
  var lastRightNode = null;

  currentNode = linkedlist.head;

  if (currentNode.next === null || currentNode.data === null) {
    console.log("entered false");
    return false;
  }

  while (currentNode != null) {
    if (currentNode.data < partition) {
      if ((lastLeftNode === null) & (firstRightNode === null)) {
        console.log("left null entered");
        lastLeftNode = new Node(currentNode.data);
        partitionedList.addNode(lastLeftNode);
      } else {
        console.log("left else entered");
        lastLeftNode.next = new Node(currentNode.data);
        lastLeftNode = lastLeftNode.next;
        lastLeftNode.next = firstRightNode;
      }
    } else {
      //data is equal to or greater than partition
      if (firstRightNode === null) {
        console.log("right null entered");
        let newCurrent = new Node(currentNode.data);
        firstRightNode = newCurrent;
        lastLeftNode.next = firstRightNode;
      } else {
        if (firstRightNode.next === null) {
          console.log("right add first right node null");
          let newCurrent = new Node(currentNode.data);
          firstRightNode.next = newCurrent;
          lastRightNode = newCurrent;
        } else {
          console.log("right add to end");
          lastRightNode.next = new Node(currentNode.data);
          lastRightNode = lastRightNode.next;
        }
      }
    }
    currentNode = currentNode.next;
  }

  return partitionedList;
}

const linked = new LinkedList();
linked.addNode(5);
linked.addNode(7);
linked.addNode(333);
linked.addNode(4);
linked.addNode(232);
linked.addNode(653);
linked.addNode(8);

// var partLinked = betterPartition(linked, 23);
// console.log(partLinked.head.next.next.next.next);

/*
Biggest takeaway from this problem:
    When using linked lists, don't focus on adding to the linked list
    Focus on adjusting the pointers
    Errors were made when I did partitionList.addNode()

    
*/

//2.4 with a double linked list
//how I would implement ==> add to beginning of head the items with < partition
//add to end of tail items > partition
//change the
function betterBetterPartition(doubleLL, partition) {
  //new tracker
  newHead = null;
  newTail = null;

  currentNode = doubleLL.head;

  //does .data need to be added to condition
  if (doubleLL.head === null) {
    return false;
  }
  let newNode = new DoubleNode(currentNode.data);
  if (currentNode.data < partition) {
    //i'm doing this because there were issues with mutability before

    newNode.next = newHead;
    newHead.prev = newNode;
    newHead = newNode;
  } else {
    newTail.next = newNode;
    newNode.prev = newTail;
    newTail = newNode;
  }

  return newHead;
}

const dubs = new DoubleLinkedList();
dubs.addNode(5);
dubs.addNode(32);
dubs.addNode(87);
dubs.addNode(23);
dubs.addNode(332);
// console.log(betterBetterPartition(dubs, 100));
/*Moved on with conceptual understanding, book solution is not technical
at all */

//2.5 Sum Lists
//two linked lists stored in reverse order ==> 1s digit at the head
//return number stored as linked list

function reverseSumLists(link1, link2) {
  current1 = link1.head;
  current2 = link2.head;

  if (current1 === null && current2 === null) {
    return false;
  }

  var sumList = new LinkedList();
  var extraDigit = 0;

  while (current1 != null || current2 != null) {
    var add = extraDigit;
    if (current1 != null) {
      add += current1.data;
    }
    if (current2 != null) {
      add += current2.data;
    }
    if (add - 10 > 0) {
      sumList.addNode(add - 10);
      extraDigit = 1;
    } else {
      //negative
      sumList.addNode(add);
      extraDigit = 0;
    }
    try {
      current1 = current1.next;
    } catch (err) {
      current1 = null;
    }

    try {
      current2 = current2.next;
    } catch (err) {
      current2 = null;
    }
  }

  return sumList;
}

/*Could also use recursion*/

let link1 = new LinkedList();
// link1.addNode(7);
// link1.addNode(1);
// link1.addNode(6);

let link2 = new LinkedList();
// link2.addNode(5);
// link2.addNode(9);
// link2.addNode(2);

// console.log(reverseSumLists(link1, link2).head);

//2.5 what if they were not reversed ==> were in correct forward looking order
//pretend i don't have length property in linkedlist definition
function addForward(list1, list2) {
  var length1 = 0;
  var current1 = list1.head;
  while (current1 != null) {
    length1 = length1 + 1;
    current1 = current1.next;
  }

  var length2 = 0;
  var current2 = list2.head;
  while (current2 != null) {
    length2 = length2 + 1;
    current2 = current2.next;
  }

  var longer = null;
  var shorter = null;

  if (length1 - length2 > 0) {
    longer = current1.head;
    shorter = current2.head;
  } else {
    longer = current2.head;
    shorter = current1.head;
  }

  var lengthDif = abs(length1 - length2);
  var sumList = new LinkedList();
  var carryBack = 0;
  var prevNode = null;

  
}
