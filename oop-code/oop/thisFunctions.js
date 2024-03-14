// "This" works differently between types of functions.
// in an arrow function, "this" refers to the parent scope.
// in a constructor function, "this" refers to the object being created.
// in a regular function, "this" refers to the object that called the function.
// in a method, "this" refers to the object that the method was called on.
// in a callback function, "this" refers to the object that called the function.
// in a class, "this" refers to the objects we will create in the future, not the class itself.

// regular function example:
function logThis(){
    console.log(this.value)
}

const thing1 = {
    fn: logThis,
    value: "thing1"
}

const thing2 = {
    fn: logThis,
    value: "thing2"
}
thing1.fn() // >> "thing1"
thing2.fn() // >> "thing2"

// arrow function example:
// remember, this will refer to the parent scope, not the object that called the function
const logThis2 = ()=>{
    console.log(this.value)
}

const thing3 = {
    fn: logThis2,
    value: "thing3"
}
const thing4 = {
    fn: logThis2,
    value: "thing4"
}
thing3.fn() // >> undefined
thing4.fn() // >> undefined

// Constructor functions:
// using function keyword:
function RegularFunction() {
    this.value = 42;
  
    this.getValue = function() {
      console.log(this.value);
    };
  }
  
  var regularObj = new RegularFunction();
  regularObj.getValue(); // Outputs: 42


// using arrow function:
function ArrowFunction() {
    this.value = 42;
  
    this.getValue = () => {
      console.log(this.value);
    };
  }
  
  var arrowObj = new ArrowFunction();
  arrowObj.getValue(); // Outputs: 42