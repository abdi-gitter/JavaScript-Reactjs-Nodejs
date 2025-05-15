// Object constructor
//In this example, Person is a constructor function that 
//initializes new objects with name and age properties, and a describe method.
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.describe = function() {
      return `${this.name} is ${this.age} years old.`;
    };
  }


  //To create a new instance of an object, you use the new keyword followed 
  //by the constructor function and any necessary arguments:

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.describe()); // "Alice is 30 years old."
console.log(person2.describe()); // "Bob is 25 years old."
  


//constructor with prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.describe = function() {
    return `${this.name} is ${this.age} years old.`;
  };
  
  const person3 = new Person('Charlie', 28);
  console.log(person3.describe()); // "Charlie is 28 years old."
  


  /* ES6 introduced a class syntax as syntactic sugar over the existing 
  prototype-based inheritance. The class syntax makes it easier to write 
  constructors and deal with inheritance: 
   
  Although the class syntax provides a cleaner and more straightforward 
  way to define constructors and deal with inheritance, under the hood, 
  it still uses JavaScript's prototype-based inheritance.

Constructors are a powerful feature of JavaScript, enabling developers 
to create complex, reusable objects that encapsulate data and functionality.
  */

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    describe() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  const person4 = new Person('Dana', 22);
  console.log(person4.describe()); // "Dana is 22 years old."





  const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
      // return this.firstName + " " + this.lastName;
      // or using template lateral notation
      return `${this.firstName} ${this.lastName}`;
    },
    greet: function() { console.log('hello'); },
    greet2() { console.log('hello2'); }
  };
  console.log(person.fullName()); // John Doe
  person.greet(); // hello
  person.greet2(); // hello2
  
