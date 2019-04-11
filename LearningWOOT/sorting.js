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

var woot = [2, 5, 1, 7, 3, 6, 4];

const selectionSort = list => {
  //try with length of lift and shifting

  
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

console.log(selectionSort(woot));
