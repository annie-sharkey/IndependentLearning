/*
https://itnext.io/design-patterns-in-javascript-f533632556c1
Creational pattern


INTENT: separate construction of complex object from its representation so 
the same construction process can create different representations

Steps:
Create builder
Consists of methods that will essentially set the properties of the employee
pass info to employee class
creates new employee

allows flexibility in creation of object

NOTE:
return this;
is a common way of chaining methods together
*/

class Employee {
  constructor(builder) {
    this.name = builder.name;
    this.primaryRole = builder.teamRole;
    this.perform = builder.performance;
  }
}

class EmployeeBuilder {
  constructor(name) {
    this.name = name;
  }

  makeTester() {
    this.teamRole = "tester";
    return this;
  }

  makeAnalyst() {
    this.teamRole = "analyst";
    return this;
  }

  markGood() {
    this.performance = "Good";
    return this;
  }

  build() {
    return new Employee(this);
  }
}

var Elizabeth = new EmployeeBuilder("Annie")
  .makeTester()
  .makeAnalyst()
  .markGood()
  .build();
console.log(Elizabeth);

/*
This solution uses chaining methods
aka cascading

repeatedly calling one method after another on an object in one continuous line of
code

already use with splitting and joining strings
ex. "string".split('').sort().join('');
*/
