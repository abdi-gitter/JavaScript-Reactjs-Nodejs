//How the this key word works
/* Using the bind Method
The value of this refers to the object it belongs to, 
and it can change based on how a function is called.

The bind() method creates a new function that, when called, 
has its this keyword set to the provided value, with a given 
sequence of arguments preceding any provided when the new function is called. */
const person = {
    name: 'John',
    greet: function() { console.log(`Hello, ${this.name}`); }
  };
  
  const greetJohn = person.greet.bind(person);
  greetJohn(); // Output: "Hello, John"
  



  /* Using the call and apply Methods
Both call and apply methods call a function with a given this value. 
call requires the arguments to be passed individually, while 
apply takes them as an array. */

function greet() {
    console.log(`Hello, ${this.name}`);
  }
  
  const person1 = { name: 'John' };
  
  greet.call(person1); // Output: "Hello, John"
  greet.apply(person1); // Output: "Hello, John"
  


  /* Arrow Functions explanation
Arrow functions do not have their own this context; instead, 
they capture the this value of the enclosing context at the time 
they are created. This is particularly useful in callbacks and 
event handlers. */

const person3 = {
    name: 'John',
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}`);
      }, 1000);
    }
  };
  
  person3.greet(); // Output: "Hello, John" (after 1 second)


  /* Using a Closure
A closure can be used to explicitly set what this refers to by 
assigning it to another variable within a function's scope. 
This is a common pattern in scenarios where the context might 
change, such as event handlers or asynchronous callbacks. */

const person4 = {
    name: 'John',
    greet: function() {
      const self = this; // 'self' captures the 'this' reference
      setTimeout(function() {
        console.log(`Hello, ${self.name}`);
      }, 1000);
    }
  };
  
  person.greet(); // Output: "Hello, John" (after 1 second)
  
/* Constructor Functions and Class Constructors
When using constructor functions or class constructors, 
this refers to the newly created object. */


/* Constructor Functions and Class Constructors
When using constructor functions or class constructors, 
this refers to the newly created object. */

function Person(name) {
    this.name = name;
    this.greet = function() {
      console.log(`Hello, ${this.name}`);
    };
  }
  
  const person5 = new Person('John');
  person5.greet(); // Output: "Hello, John"
  
