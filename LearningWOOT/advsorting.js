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

// console.log(fib(10));

for (var i = 0; i <= 10; i++) {
  // console.log(fib(i));
}

//But time complexity here is very high ==> avoid recursion
//recursion puts stress on stack bc steps held in memory --> high space complexity
//graph pg. 188 ==> many of the same calls/passes to fib are repetitive
//idea: what if we could store what fib(6) was for example and sub that in when we
//need it

/*
Memoization is caching ==> remembering solution to subproblem so you don't have to calc
again recursively

the following is time O(n)
  iterating over items in for loop is O(n)
  accessing is O(1) like O(n*1) so O(n)

space complexity ==> O(n)
*/

const fibFaster = n => {
  var sequence = [0, 1];

  for (var i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence;
};

// console.log(fibFaster(10));

//what if you just want nth number? not sequence?
//make it "greedy" ==> how do we reduce amount we're storing

const fibLessStorage = n => {
  let minusTwo = 0;
  let minusOne = 1;
  let current;

  for (let i = 2; i <= n; i++) {
    current = minusTwo + minusOne;
    minusTwo = minusOne;
    minusOne = current;
  }

  return current;
};

// console.log(fibLessStorage(9));

//adapted to use a callback to print out sequence
const fibConstSpace = (n, callback) => {
  let minusTwo = 0;
  let minusOne = 1;
  let current;

  //only if callback provided
  if (callback) {
    callback(0);
    callback(1);
  }

  for (let i = 2; i <= n; i++) {
    current = minusTwo + minusOne;
    minusTwo = minusOne;
    minusOne = current;
    callback(current);
  }
};

fibConstSpace(10, function(result) {
  // console.log(result);
});

/*
Callback review
https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced

function executed after another function finished executing
functions are objects
  therefore functions can take other functions are arguments and be returned by other functions
  higher order functions

can use callbacks to make sure certain code doesn't execute until other code has already
finished execution --> but order not maintained

think when i made get requests I called get and then had a callback function executed with
what to do with info when received
*/

// function cookFood(meal, callback) {
//   console.log(`Mom is making ${meal}.`);
//   callback();
// }

// cookFood("pasta", function() {
//   console.log("dinner finished");
// });

// function notReady() {
//   console.log("Dinner not ready.");
// }

// cookFood("cauliflower", notReady);

//How can we make fib more flexible?
//code above

/*
Examples of greedy algorithms
  think about getting out of maze -- moving one hand on wall at a time until eventually
  getting out, not keeping track of past is not necessarily optimal but it's reduces
  space complexity in mem

  think of agile development -- share update daily. doesn't always make a map or graph of
  past updates about how you got there, not always optimal but is a solution


********Bellman Ford********
Use of graphs: optimization of path traversal
if we apply weights to graphs we can run calculations on anything

ex. finding shortest path between two vertices

Example on page 195
  Is edge weighted, directed
  Find shortest path between S  and A through E (not all connected by just the shortest
    paths to each item)

*/

var vertices = ["S", "A", "B", "C", "D", "E"];

//memoization table
//infinity indicates that we don't have a path to that vertice yet
var memo = {
  S: 0,
  A: Number.POSITIVE_INFINITY,
  B: Number.POSITIVE_INFINITY,
  C: Number.POSITIVE_INFINITY,
  D: Number.POSITIVE_INFINITY,
  E: Number.POSITIVE_INFINITY
};

var graph = [
  { from: "S", to: "A", cost: 4 },
  { from: "S", to: "E", cost: -5 },
  { from: "A", to: "C", cost: 6 },
  { from: "B", to: "A", cost: 3 },
  { from: "C", to: "B", cost: -2 },
  { from: "D", to: "C", cost: 3 },
  { from: "D", to: "A", cost: 10 },
  { from: "E", to: "D", cost: 8 }
];

/*
We're calculating the distance between nodes and then remembering the smallest ones, the smallest
path cost
As we go through the graph we "relax" the values -- start with the highest values (infinity) and
then relax the costs as we find shorter paths

Iterate over our vertices
Add the outgoing vertices to our calculations
Move to the next vertice and count outgoing path
  If we land on a value that is infinity then we don't have a path from S to that vertice yet
  Move to next vertice


*/

const iterate = () => {
  var doItAgain = false;

  //get the first from vertice
  //then filter our graph by values of the same
  //want the edges that have the same from as the current vertex we're on
  //vertices is an array and graph is an array of objects --> both iterable objects

  for (fromVertex of vertices) {
    console.log(fromVertex);
    var edges = graph.filter(path => {
      return path.from === fromVertex;
    });
    for (edge of edges) {
      const potentialCost = memo[edge.from] + edge.cost;
      if (potentialCost < memo[edge.to]) {
        memo[edge.to] = potentialCost;
        doItAgain = true;
      }
    }
  }
  return doItAgain;
};

for (vertex of vertices) {
  if (!iterate()) break;
}

console.log(memo);

/*
Take aways: 
  dynamic programming divides problem (finding the shortest path) into smaller sub problems
  (calculating cost between each vertex)

  then recurse over smaller problems (iterate) and use memoization from updating our objects
  to find answer

  can still improve above algorithm




**********DJIKSTRA*************
doesn't have negative weighted edges
can run with one iteration

each vertex only visited once
next vertex must have the smallest cost of the remaining unvisited vertices

keep track of things that have been visited
*/

class MemoTable {
  constructor(vertices) {
    this.S = { name: "S", cost: 0, visited: false };
    this.table = [this.S];
    for (var vertex of vertices) {
      this.table.push({
        name: vertex,
        cost: Number.POSITIVE_INFINITY,
        visited: false
      });
    }
  }

  //non visited
  getNonVisitedVertices() {
    return this.table.filter(vertice => {
      return vertice.visited === false;
    });
  }

  //return to this
}
