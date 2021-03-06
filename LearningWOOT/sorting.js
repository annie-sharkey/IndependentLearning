/*
Alogirthms: simple





***Bubble sort*****
"bubbling up the larger numbers"
look at first two items, swap, then move to next index, compare next items, swap
move until end
repeat if not in order

complexity of bubbleSort function below:
    using for loop
    using recursion

    for loop is n, recursion is approx n
    for every time we recurse, we have to go through entire list again, very slow
    n *n
    thinking O(n^2)

    takes up O(n) space

*/
const list = [6, 3, 10, 9, 25, -100, 1000, 9, 0, 87];

const bubbleSort = list => {
  var swapMade = false;
  for (var i = 0; i < list.length; i++) {
    var firstNum = list[i];
    var secondNum = list[i + 1];

    if (firstNum > secondNum) {
      list[i + 1] = firstNum;
      list[i] = secondNum;
      swapMade = true;
    }
  }

  if (swapMade) {
    bubbleSort(list);
  }

  return list;
};

// console.log(bubbleSort(list));

/*
***** MERGE SORT*******
Divide and conquer ==> very efficient

remem: divide and conquer frequently O(log n)

power of merge sort is that the leftmost numbers are always smaller once they've been
sorted than the numbers right of them 

method:
    1. break list down into pairs of two
    2. recombine and sort at same time
    3. sort by comparing the left most items and then adding the lesser value
    back first

time complexity: O(nlogn)
*/

//can we recursively split?
const mergeSort = list => {
  if (list.length <= 1) {
    // console.log(list);
    return list;
  }

  const middleIndex = list.length / 2;
  const left = list.slice(0, middleIndex);
  const right = list.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
};

//fixed original approach using shift method
const merge = (left, right) => {
  var result = [];

  //   console.log("left " + left);
  //   console.log("right " + right);

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  //left has smaller values so go first
  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

// console.log(mergeSort(list));

/*
******QUICKSORT********
Divide and conquer
Pick a pivot point ==> pick at end
    Then partition list so that all elements less than end are to the left
    and all elements greater than end are to the right

    Move the greater number to the right of your pivot
    Move pivot down one index but there's a number there
    Move that number to where the moved number originally was

    Once first iteration done, pivot is in its final spot
    Then sort the left and the right, excluding the pivot

*/

list3 = [5, 2, 8, 1, 2, 4, 3, 7, 1, 6];
//check issue with duplicates sometimes causing problems
const quicksort = list => {
  if (list.length <= 1) {
    return list;
  }

  var pivotIndex = list.length - 1;
  var currentIndex = 0;

  while (list[currentIndex] != list[pivotIndex]) {
    if (list[currentIndex] < list[pivotIndex]) {
      currentIndex++;
    } else if (list[currentIndex] > list[pivotIndex]) {
      const leftOfPivot = list[pivotIndex - 1];
      const pivotValue = list[pivotIndex];
      const moveLargeNumtoRight = list[currentIndex];

      list[currentIndex] = leftOfPivot;
      list[pivotIndex - 1] = pivotValue;
      list[pivotIndex] = moveLargeNumtoRight;

      pivotIndex--;
    }
  }

  //   console.log(list.slice(0, pivotIndex).concat(list[pivotIndex]));
  return quicksort(list.slice(0, pivotIndex))
    .concat(list[pivotIndex])
    .concat(quicksort(list.slice(pivotIndex + 1)));
};

// console.log(quicksort(list3));
// console.log(quicksort(list));

/*
***SELECTION SORT****
scan list for lowest value
put the lowest value in the beginning
move the current beginning to where the old num was
move through list
*/

var woot = [2, 5, 1, 7, 2, 3, 6, 4, -1, 2, 2];

const selectionSort = list => {
  var result = [];
  while (woot.length) {
    var minIndex = 0;

    for (let i = 1; i < list.length; i++) {
      if (list[i] < list[minIndex]) {
        minIndex = i;
      }
    }

    if (minIndex === 0) {
      result.push(list.shift());
    } else {
      const firstNum = list[0];
      list[0] = list[minIndex];
      list[minIndex] = firstNum;
      result.push(list.shift());
    }
  }

  return result;
  //   var minIndex = 0;
  //   var needToSwap = false;
  //   for (var x = 0; x < list.length; x++) {
  //     for (let i = 1 + x; i < list.length; i++) {
  //       if (list[i] < list[minIndex]) {
  //         minIndex = i;
  //         needToSwap = true;
  //       }
  //     }
  //     if (needToSwap) {
  //       const minElement = list[minIndex];
  //       const elementToMoveToLater = list[x];
  //       list[x] = minElement;
  //       list[minIndex] = elementToMoveToLater;
  //     }
  //     // console.log(list);
  //   }
  //   return list;
};

// console.log(selectionSort(woot));

/*
*****HEAP SORT********
Moves unsorted data to sorted partition selectively
Uses a heap to this ==> remem: tree structure where parent nodes in each level 
either greater than (max heap) or less than (min heap) child nodes in descendant levels

O(nlogn)

Puts max items at the top
Fill tree from left to right
If you fill with a value that should be greater than the one above it, swap
    Keep swapping up if necessary
*/

/*
******BINARY SEARCH********
split list in half, look to see which one is less vs. greater

*/

//ordered list
const binarySearch = (list, lookFor) => {
  var listSlice = list;
  while (listSlice.length >= 1) {
    var midIndex = Math.floor(listSlice.length - 1 / 2);

    if (lookFor === list[midIndex]) {
      return list.indexOf(list[midIndex]);
    } else if (lookFor > list[midIndex]) {
      console.log("else if entered");
      listSlice = list.slice(midIndex);
      console.log(listSlice);
    } else {
      listSlice = list.slice(0, midIndex);
    }
  }
};

//                 0   1  2  3   4    5   6
var orderedList = [4, 8, 15, 16, 23, 42, 98];
// console.log(binarySearch(orderedList, 98));

/*
******Graph Traversal********
Can traverse using recursion or iteration ==> recursion is helpful but costly
    high space complexity


Ex. using recursion pg. 171
Can also use iteration using a loop instead of filling up stack


****DEPTH FIRST SEARCH*******
go as deep as possible preferably starting from the left
go as deep left and then backtrack right

implement using a stack
*/

var BinSearchTree = require("./Datastructures/trees/treesCC.js");
var Stack = require("./Datastructures/StacksQueues/stack.js");
var trees = new BinSearchTree();
trees.insert(4);
trees.insert(8);
trees.insert(11);
trees.insert(2);
trees.insert(12);
trees.insert(6);
trees.insert(1);
trees.insert(10);

// remem lifo
const depthFirstSearch = tree => {
  var nodeStack = new Stack();
  nodeStack.push(tree.root);

  var currentNode = null;
  while (nodeStack.isEmpty() !== true) {
    currentNode = nodeStack.pop();
    console.log(currentNode.data);

    if (currentNode.right != null) {
      nodeStack.push(currentNode.right);
    }

    if (currentNode.left != null) {
      nodeStack.push(currentNode.left);
    }
  }
};

// depthFirstSearch(trees);

/*
Breadth first search

Use a queue ==> track the nodes of a tree in each level before traversing to the next level
Track every node and its children in order

*/

var Queue = require("./Datastructures/StacksQueues/queue.js");

const breadthFirstSearch = tree => {
  var nodeQueue = new Queue();
  nodeQueue.enqueue(tree.root);

  var currentNode = null;
  while (!nodeQueue.isEmpty()) {
    currentNode = nodeQueue.dequeue();
    console.log(currentNode.data);

    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }

    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }
};

breadthFirstSearch(trees);
