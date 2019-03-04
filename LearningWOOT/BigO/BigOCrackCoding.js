/*
Big O ==> upper bound on the time
    algorithm is at least as fast as its big O notation/growth ==> could take less time
    less than or equal to relationship
    written as O(n^2), O(n)

Big Omega Ω ==> lower bound
    Ω(N) ==> won't be faster so could take longer

Big Theta ==> both O and Ω
    gives tight bound on runtime

---------
Return to more later/create code 
QUICKSORT
    partitions an array of data into smaller arrays
    large array is positioned into two arrays one of which holds values smaller than the
    designated pivot value and the other holds values greater than pivot

    picks a random element as the pivot and then swaps values in an array
    such taht the elements less than pivot appear before elements greater
    than pivot to get a partial sort. then call recursively on the sub arrays

    --> partitions and then calls itself recursively twice to sort 
    the two resulting subarrays, find the pivot for each sublist until
    all lists contain only one element

logn involved when splitting something and sorting in pieces

Quicksort big O
can operate in place on an array
divide and conquer 

implementation (note there are different ways to pick the pivot)
https://en.wikipedia.org/wiki/Quicksort
    1) pick an element calls the pivot from an array
    2) reorder the array so all elements with values less than pivot
    come before the pivot while all values greater than the pivot 
    come after
        ==> pivot will be in final position
        ==> called partitioning operation
    3) recursively apply the above steps to the subarray of elements
    with smaller values and separately apply to elements greater than

    base case of the recursion is an array of size zero or one


==> best case is that we go through the entire array and all elements are 
equal so just traversing through the array once gives us O(N)
==> best case occurs when the list is in a completely random order is O(nlogn)
        would happen when we perform a partition and the list gets divided into two equal
        pieces
        each recursive call happens on a list half the size of the original
        ===> each time we divide the array into two parts giving us O(log N), but then
        for each part we have to find the pivot element which takes O(N) time
        gives us O(nlogn) time complexity
        
****understanding power of logn***********
    what usually happens is we're doing a parallel algorithm (executing on multiple pieces
        at the same time) instead of a serial algorithm (executing one step at a time
            start to finish)
    parallel algorithms executed concurrently
    does more work per step than serial/sequential
    ***as n (inputs) goes up exponentially, time grows linearly (time is the exponent)


==> worst case happens when pivot is repeatedly the biggest element in the
array
    this is a problem because then we can't divide the array in half (to
        get some sort of logn time) and recurse on each half
    instead we shrink the array by one element each time
    ==> think about how this can be O(n^2)

==> expected/average case is O(nlogn) ==> we don't always expect best case and
we don't always expect worst case








***************Space Complexity************
        we also care about the amount of memory required by an algorithm
        ex. if we need to create an array of size n, this requires O(n) space

        think about a recursive algorithm ==> each call adds a level to the stack and requires
        memory

        but sometimes just because you have n calls total doesn't mean it takes O(n) space
        ex. if you call a function from within another function but don't need to maintain
        the call on the stack
*/

const pairSumSequence = n => {
  let sum = 0;
  for (i = 0; i < n; i++) {
    sum += pairSum(i, i + 1); //everytime pairSum is called you don't have to maintain on stack
    //therefore requires O(1) space although it is is called O(n) times
  }
  return sum;
};

const pairSum = (a, b) => {
  return a + b;  
};

console.log(pairSumSequence(5));

/*
Addition vs. Mult
==> add if algorithm is in the form of do this and then do that
==> mult if algorith is in the form of do this for each time you do that





******************Amortized Time*********************
https://en.wikipedia.org/wiki/Amortized_analysis
"motivation for amortized analysis is that looking at the worst case run time per operation instead
of per algorithm can be too pessimistic"

(cracking) Remember ArrayLists from java ==> 
(javascript arrays are auto dynamic)
ArrayLists are implemented with an array ==> when the ArrayList hits capacity the AL class
creates a new array with double the capacity and copy the elements over

Time complexity is O(n) ==> time to copy everything over is O(n) and time to add to end of list
is O(1) so O(n) + O(1) = O(n)

Most times inserting only takes O(1) because we always add to end
(if we inserted at index, not at the end we would have had to move rightmost items in list
    so this would be O(n))

    https://stackoverflow.com/questions/45220908/why-arraylist-add-and-addint-index-e-complexity-is-amortized-constant-time
    Amortized complexity of a single add operation is O(1) because only rarely do we have to grow at O(n).
    (ArrayLists double in capacity at 1, 2, 4, 8, 16...)

    Note: asymptotic complexity of n add operations is O(n). This is in terms of n operations, not one operation.
    Think: after X elements we double the capacity at array sizes 1, 2, 4, 8...X. So this takes
    1, 2, 4, 8...X copies
    The sum of 1 + 2 + 4 + 8 +...+X starts with one and doubles to X
    But reading right to left we have X + X/2 + X/4 + X/8+...+1 which is about 2X ==> O(n) time

https://www.cs.cmu.edu/afs/cs/academic/class/15451-s07/www/lecture_notes/lect0206.pdf
Definition amortized cost: is the total cost of the operations divided by n

Think of using an array to implement a stack:
    cost model: inserting into array costs 1. taking an element out of the array costs 1.
        cost of resizing the array is the number of elements moved.






*************************LOG N RUNTIMES*******************
Binary search ==> example for reference on page 44 crack coding
We divide the size of the array which we are searching by 2 each time
The time it takes for binary search to execute therefore depends on how many times we have to divide by 2
    to find our desired number

    to binary search we find midpoint of entire array and compare 9 to it
                1. searching 9 in {1, 5, 8, 9, 11, 13, 15, 19, 21}
    then 9 < 11 so we have to search 9 in lower half
                2. searching 9 in {1, 5, 8, 9}
    then 9 > 8 so we search 9 in {9}
                3. searching 9 in {9}

We stop searching when we either find the value or we're down to one element.
total possible runtime is a matter of how many steps (dividing by 2 each time) we take until N = 1

So with an array of 16 elements, N = 16 the following happens:
    16
    8     divide by 2
    4     divide by 2
    2     divide by 2
    1     divide by 2

Alternatively look at it in opposite direction 
    1       multiply by 2
    2       multiply by 2
    4       multiply by 2
    8       multiply by 2
    16      end

    Question ==> how many times must we multiply by 2 to get 16? What power must we raise 
    2 to to find 16?
    2 ^ x = 16
    Here: 2 ^ 4 = 16 AKA log_2(16) = 4

Myself mentally differentiating between what happens with exponents and what happens with logs:
    (high) n^2 ex. doing a for loop within a for loop
        for every n we must do something on that n

    (mid) n 
        for each element we must do something

    (low) logn
        we only touch half of the elements
        ex. binary search halves each times the number of elements we need to analyze

    (lowest) O(1)
        
    O(something N) is growth in time in relation to the number of inputs n ==> log n is on num inputs
    ***as n (inputs) goes up exponentially, time grows linearly (time is the exponent)
    2 ^ x = 16       x = 4, time
    2 ^ x = 32 inputs   aka log_2(32) = x = 5
        inputs increased exponentially
        time increased linearly
     

*************PG. 45 ==> When deciding time complexity, ask how many nodes per each level ==> how do the number
of nodes increase
    do they x2 each time ==> could be 2 ^ n
    do they /2 each time ==> logn
    do they increase once each level ==> n

*/


//LOOK INTO MORE:
//review fib relationship to squares
//sums of sequences/series
//amortized vs. asymptotic complexity review again
//base of the log pg. 630

