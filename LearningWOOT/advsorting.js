/*
**********Advanced Sorting*************

To use dynamic programming must:
    1. be an optimization problem (think chapter 1)
    2. dividable into subproblems
        objective: recurse over small subproblems and build to larger problem
    3. have an optimal structure
        subproblems are complete unto themselves
    4. reducible to P time through memoization 
        think of caching answers to subproblems and then applying



Fibonacci
*/

//return numbers until nth position in sequence
const fib = n => {
  

  if (n < 2) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
};

console.log(fib(10));

for (var i = 0; i <= 10; i++) {
  console.log(fib(i));
}

//But time complexity here is very high ==> avoid recursion
//recursion puts stress on stack bc steps held in memory --> high space complexity 
//graph pg. 188 ==> many of the same calls/passes to fib are repetitive
  //idea: what if we could store what fib(6) was for example and sub that in when we 
  //need it

/*
Memoization is caching ==> remembering solution to subproblem so you don't have to calc
again recursively
*/