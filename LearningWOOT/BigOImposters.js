/*
const num = [1, 2, 3, 4, 5]

O refers to the growth rate of the function, order ==> as it approaches infinity
the highest order is the only one that matters

https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity
Big O notation describes how an algorithm grows relative to the input as the input
gets larger.
Because we don't know the exact amount of time a program will take to run with any
given processor, we use Big O to talk about how quickly the program grows.

We're not directly measuring runtime ==> measuring growth so we use n to say that
something is growing on the order of the size of the input O(n) or growing on 
the order of the square of the size of the input O(n^2).


**********O(1)*********
To get num[0] or any other index, you only have to do one operation. 
IF there were more items in the array, you would still only have to do
one operation. 
    ==> constant time, order 1, for all inputs to our algorithm there is
    only one operation required
    meaning that the time complexity doesn't change based on the number of
    inputs -- don't think about everytime this will take three steps so it should
    be O(3) or something like that ==> think in terms of how time complexity
    doesn't change based on number of inputs

*********O(n)***********
Linear scaling
if you wanted to add all elements in the list together with
for(let num of nums) {
    sum+= num;
} ==> you have to go over each item in the array
is doing n times the work we did in O(1)
think loop * loop 
quadratic time

example of converting O(n) to O(1)
==> if you have to sum every number in a list you have to iterate over every item
But if you knew that the list was in order from 1 to n then you could plug into
the equation Sum of the series = n(n+1)/2
Think about this with 1,000,000 numbers ==> big difference in time

iterating over an array is O(n)

N can be the actual input or the size of the input i.e. size of the array
in java
public static void sayHiNTimes(int n) {
    for (int i = 0; i < n; i++) {
        System.out.println("hi");
    }
}
This is O(n) even though the input is an integer

This is like O(2n) but we throw out the constants and just say O(n)
public static void printAllItemsTwice(int[] items) {
    for (int item : items) {
        System.out.println(item);
    }

    for (int item : items) {
        System.out.println(item);
    }
}


*********O(n^2)**********
Let's say you want to check that every item in an array is not repeated by
for each item in the loop running the loop again and comparing that one item
is not in another item.

Doing two iterations of O(n) = O(n^2)
Return to this

*******Order(log n)*******
Binary search ==> when looking for a number in an array, if list sorted, 
we can split the list in the middle and throw away the part we don't want
and keep splitting the part we like until we get at the answer

=> review
2^ x = 512 ==> log2(512) = x asking log base 2 of 512 equals x
want to know how many times to multiply 2 to get to 512 ==> changes from 
default base 10
logs split a given number into a base

for binary search where we're splitting things in two, we have
log2(n) = x
(exact math doesn't matter -- what matters is that it's a log, we don't even
care about the base and x ==> just care about O(log n))

comparison: if we usd O(n) to scan our list we would have had to do n = 5
operations, but by splitting be brought number of operations to 3
    might think that splitting and evaluating is 2 operations but they are 2 
    O(1) operations so we consider that to be O(1)


****rethink O(N^2) with O(n log n)*******
what is the big O of using our binary search inside of our linear scan?
    ==> revisited in later chapter


What is we knew there was only one duplicate number in const nums = [1, 2, 3, 4, 4, 5]?
    further adapt O(n log n) algorithm

*/
const array1 = [1, 2, 3, 4, 4, 5];

const findDuplicate = array => {
  const lastNum = array[array.length - 1];
  const noDupVal = lastNum * ((lastNum + 1) / 2);

  let arraySum = 0;
  for (num in array) {
    arraySum += array[num];
  }

  return arraySum - noDupVal;
};

console.log(findDuplicate(array1));

/*
Review:
random access to a given element is always O(1)

list iterations always O(n)

nested loops always O(n^2)

divide and conquer always O(logn)

iterations that use divide and conquer always O(nlogn) => like looping a list

Space complexity vs. time complexity


http://bigocheatsheet.com/
https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/


*/