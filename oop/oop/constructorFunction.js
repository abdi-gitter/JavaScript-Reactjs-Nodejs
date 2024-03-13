// This is a constructor function
// Constructor functions are used to create objects in JavaScript
function Person(first, last){  
    this.first = first;
    this.last = last;

    this.fullName = function(){
        console.log(this.first + ' ' + this.last)
    }
}

// When we use the new keyword, we're creating a new object
// "this" will now refer to that new object which we are assigning to the variable "Chase"
const Chase = new Person("Chase", "Lones")
Chase.fullName() // Chase Lones



// console.log(person); // Person { first: 'John', last: 'Doe' }