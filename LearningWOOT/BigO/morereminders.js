/*
Just because something is a for loop does not mean that it is n time 
furthermore nested for loops are not always n^2.

*/

//ex. this is O(1)
//200000 is a constant -- like thinking O(200000) but we replace this with 1
// for (i = 0; i < 200000; i++) {
//   console.log(i);
// }

//this is O(n ^ 2)
function makePairs(array) {
  for (i = 0; i < array.length; i++) {
    for (j = 1; j < array.length; j++) {
      console.log("(" + array[i] + "," + array[j] + ")");
    }
  }
}

//this is O(ab)
//this is a*b because if you add an element to array1, how will this grow in time
//complexity? ==> the effect of the increase occurs once in array1, but not a
//second time in array2
function twoArrays(array1, array2) {
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      console.log(array1[i] + array2[j]);
    }
  }
}

/*

asymptotic ==> one way to analyze is Big O
Remem that Big O is upper limit

**************NLOGN vs. LOGN********************
Search is different than sorting

https://www.codeproject.com/Questions/500926/Whatplusisplusnpluslogplusnplusmeanspluspracticall
Examples with a phone book
    
https://stackoverflow.com/questions/1592649/examples-of-algorithms-which-has-o1-on-log-n-and-olog-n-complexities
GREAT EXAMPLES ==> STUDY

https://www.youtube.com/watch?v=L7nYZ19zPqw
Why do we worry about data structures?
    use to make informed decisions about how to implement code

Data structures ==> an agreed arrangement so that it's 
                    easy to find and store desired items
    ex. wouldn't have to search every item in amazon store to get what we want
    store items based on predefined arrangements

Algorithms-- store and retrieve data efficiently no matter if data is stored
locally or in a cluster of DB or in cloud 
    Different data needs different algorithms
    Ex. Sorting ==> merge sort, quick sort, heap sort, bucket sort
    These bring up issues of algorithm complexities

Alg complexity ==> efficiency of storing and retrieving data from a data store
which algorithm is better? Big O helps us answers this

O(n) complexity, n is number of items
    At worst case, we have to search n items to find the desired one
    Upper limit of amount of time it will take to execute this algorithm
    O(n) means for n items we have to do n steps

O(n^2)
    for n number of items we have to perform n*n steps to find the desired one at
    worst (longest/slowest) case

O(n*m)
    two inputs

O(logn)
    number of items increase exponentially while time/steps required grows linearly
    ex. dictionary ==> if things stored in sorted order

O(nlogn)
    n is number of items so at worst case we have to do nlogn steps to find the
    desired item

    ex. if you have a shirt and you go to the store and want to look for a matching
    shirt. number of shirts you have could increase which is represented by n.
    so you might go in with one shirt, two shirts, etc.
    For each of these shirts, we you need to do a search that requires logn time
    given there is some order in the store.

*/

const sortArray = array => {
  let swapCounter = false;
  //O(n) time ==> instead of O(n^2)
  for (i = 1; i < array.length; i++) {
    const firstElement = array[i - 1];
    const secondElement = array[i];
    if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
      array[i - 1] = secondElement;
      array[i] = firstElement;
      swapCounter = true;
    }
  }
  if (swapCounter) {
    return sortArray(array);
  } else {
    return array;
  }
};

let sortedArray = sortArray(["b", "a", "c", "z", "d", "a", "m", "b", "l"]);

//strings immutable
const sortString = string => {
  let swapped = false;
  let newString = string;
  for (i = 1; i < string.length; i++) {
    const firstElement = newString.charAt(i - 1);
    const secondElement = newString.charAt(i);
    if (firstElement.charCodeAt(0) > secondElement.charCodeAt(0)) {
      let spliceBefore = newString.slice(0, i - 1);
      let spliceAfter = newString.slice(i + 1);
      newString = spliceBefore + secondElement + firstElement + spliceAfter;
      swapped = true;
    }
  }
  if (swapped) {
    return sortString(newString);
  } else {
    return newString;
  }
};

console.log(sortString("cbalsdaez"));
