var Stack = require("./stack.js");

//3.2 stack that returns minimum element

Stack.prototype.testing = function() {
  console.log("testing works");
};

var stackers = new Stack();
stackers.push("annie");
stackers.push("elizabeth");
console.log(stackers.printStack());
stackers.testing();
