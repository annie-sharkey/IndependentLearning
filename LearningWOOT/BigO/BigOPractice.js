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

8) take in an array of strings, sort each string, then sort full array ==> what is runtime

    initial thought process:
      letters in a string is different from number of elements in array
      therefore:
        s = number of letters in string
        a = number of strings

      sorting the string takes slogs
      sorting an array takes aloga

      for item in array {
        for s in string {
          do something to sort the string in slogs time
        }
        do something to sort the array
      }
      aloga * slogs

    answer:
      part 1: sorting string takes slogs
      doing this for each string is a*slogs
      
      part 2: but then we have to sort the array
      more complicated than just aloga because we also have to compare strings
      if s = longest length of a string
      then comparison of two strings will take O(s) time
      so then we have a*sloga time
      
      so then we have aslogs + asloga
      as(logs + loga)


  REMEMBER IF DEALING WITH MULTIPLE/SEPARATE THINGS DON'T USE N TO REPRESENT BOTH OF THEM

9) runtime of balanced binary search tree
      initial:
        first level has one node
        second level has two nodes
        third level has four nodes
        fourth level has eight nodes
        
        everytime we multiply by 2
        2 ^ n

        ************** was thinking 2 ^ n from previous discussion of recursive functions with branches running
        O(branches ^ depth)
        so when we have a recursive call twice we have O(2 ^ depth) 
        how is depth represented??
          depth = logN approximately
        so then we have 2 ^ logN
        simplify to P = 2 ^ logN
        log_2(P) = log_2(N)
        so P = N
        *************************************

        but this is measuring the wrong thing

        think: if we +1 node (not level) how will time be affected

        answer: O(n)
          in the simplest way all this code does is touch each node and add it
          the time it takes to sum grows with the number of inputs

          the reason it is not 2 ^ logn
            why do people think 2^logn? (reasoning of 2^n not correct)
                logn because each level doesn't grow with all of ns
                each level doubles and then you sum the nodes on the left and the right

            we do have an exponential time algorithm but with respect to depth
            if there are N total nodes then depth is about logN


*********compare recursive time complexity to this again -- return

10)
      initial:
        time to do the if statement itself is O(1)
        but we do if statement on every number square root of number

        thinking of growth
        if N is 36 then we go through max 6 times
        if N is 36^2 then we go through max 36 times
        if N is 72 then we go through max 8 times
        if N is 144 then we go through max 12 times

        thinking something like n^3/2


      answer: O(n ^ 1/2)
        correct that inside for loop is constant
        then just need to consider what for loop is doing/how many times we'll go through
        we'll only go through while x is less than square root of N
        we're not halving, we're square rooting
        
        Don't overthink

11) time complexity of factorial
      initial:
        when n +1 then the number of times we go through factorial function recursively also +1
        O(n)

      answer: correct
*/

const factorial = n => {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(4));

/*
12) counting all permutations of a string
      first perm function ==> O(1)
      if statement in second per function ==> O(1)
      look at for loop and how that functions 
        for loop runs contingent on the length of the string
        for every i less than string length permutation gets called again on string.length - 1
        and again and again until length of the string == 0

        O(n ^ n)

        Answer: 



Do more Big O after studying search algorithms

*/
