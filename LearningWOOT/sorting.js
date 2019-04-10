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
const list = [6, 3, 10, 25, -100, 1000, 9, 0];

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

  console.log("left " + left);
  console.log("right" + right);
  while (left.length || right.length) {
    //if no more elements in the right list
    if (!right.length) {
      result.push(left.shift());
    } else if (!left.length) {
      result.push(right.shift());
    } else {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  }
};

console.log(mergeSort(list));
console.log(list);
