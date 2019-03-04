//takeaways from practice starting from page 46
//some examples not necessary to include

/*
3) review the sum 


4)
we have two for loops on two different arrays
for every element of array A, we compare this element to array B
because they are two different arrays, if array A had one more element, the 
    increase in work would be by + B.length

    but b.length does not also increase in the amount of work done on each element
    of A

    the impact of an increase in number of elements, n, is once

think: what is the growth if more elements are added
*/

//reverse an array ==> O(n) -- n/2 is  O(n)
const reverseArray = array => {
  for (i = 0; i < array.length / 2; i++) {
    const elementBegin = array[i];
    const elementEnd = array[array.length - 1 - i];
    array[i] = elementEnd;
    array[array.length - 1 - i] = elementBegin;
  }
  return array;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

/*
7)
when same variable used you can look to take away nondominant terms
but in something like N + M we cannot take away M because there
is noe stablished relationship between N and M ==> not sure
which is dominant



==> For loop nested inside for loop does not necessarily mean n^2
need to analyze what each is doing
*/
