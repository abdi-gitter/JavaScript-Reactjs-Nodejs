//Nested arrow functions and some notes in js

/* function OuterFunction() {
    this.outerValue = "Outer";
    // Arrow function as a method of the object
    this.innerFunction = () => {
      console.log("OuterFunction's this.outerValue:", this.outerValue); // Logs "Outer"
  
      // Nested arrow function
      const nestedFunction = () => {
        console.log("NestedFunction's this.outerValue:", this.outerValue); // Also logs "Outer"
      };
  
      nestedFunction();
    };
  }
  
  const instance = new OuterFunction();
  instance.innerFunction();
   */

  function show() {
    console.log(this);
  }
  show()



  /* In JavaScript, the value of `this` within a 
  function is determined by how the function is 
  called. This dynamic nature of `this` can lead to 
  different values in different execution contexts. 
  Here's a breakdown of how the function call affects 
  the value of `this`:

### 1. Global Function Call

When a function is called in the global context, 
`this` refers to the global object. In a browser, 
the global object is `window`, and in Node.js, it is `global`.

```javascript
function show() {
  console.log(this);
}
show(); // Logs global object (window in browsers, global in Node.js)
```

### 2. Method Call on an Object

When a function is called as a method of an object, 
`this` refers to the object the method is called on.

```javascript
const obj = {
  show: function() {
    console.log(this);
  }
};
obj.show(); // Logs obj
```

### 3. Constructor Call

When a function is used as a constructor with the
`new` keyword, `this` refers to the newly created instance.

```javascript
function Person(name) {
  this.name = name;
}
const person = new Person('Alice');
console.log(person.name); // Alice
```

### 4. `call` and `apply` Methods

The `call` and `apply` methods allow you to explicitly 
set the value of `this` for a function call.

```javascript
function display() {
  console.log(this.name);
}
const obj = { name: 'John' };
display.call(obj);  // John
display.apply(obj); // John
```

### 5. `bind` Method

The `bind` method creates a new function that, when 
called, has its `this` keyword set to the provided value.

```javascript
const greet = function(greeting) {
  console.log(`${greeting}, ${this.name}`);
};
const person = { name: 'Jane' };
const boundGreet = greet.bind(person);
boundGreet('Hello'); // Hello, Jane
```

### 6. Arrow Functions

Arrow functions do not have their own `this` binding. 
Instead, they capture the `this` value of the enclosing 
context at the time they are created.

```javascript
const obj = {
  name: 'Emily',
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // Emily
    }, 1000);
  }
};
obj.greet();
```

In the example above, the arrow function inside `setTimeout` 
captures the `this` from the `greet` method's context, which is `obj`.

### 7. DOM Event Handlers

When a function is used as an event handler, `this` refers to the 
element that received the event, unless an arrow function is used.

```html
<button id="myButton">Click me</button>
<script>
document.getElementById('myButton').onclick = function() {
  console.log(this); // Logs the button element
};
document.getElementById('myButton').addEventListener('click', () => {
  console.log(this); // Logs global object (window) because it's an arrow function
});
</script>
```

The dynamic behavior of `this` in JavaScript makes it a v
ersatile yet sometimes confusing feature. Understanding 
how `this` is determined by the context of a function 
all is crucial for writing effective and bug-free JavaScript code. 
*/
