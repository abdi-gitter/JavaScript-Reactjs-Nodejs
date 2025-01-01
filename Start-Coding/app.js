//Notes on js functions, factory functions
//functions
//Factory Functions in js How do they work

//What are factory functions and how they work

  
/
*//Factory Function//
function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log(radius**2);
        }
    };
}

const circle = createCircle(3);
//let x = {}; -> x = new Object();
//circle.draw();
//constructor function
function Circle(radius){
    console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(2); 
 Every Object has a constructor property and that references 
the function that was used to create that object
Built-in constructors 
    new String();  // '', "", ``
    new Boolean(); //true, false
    new Number(); // 1,2,3,...


    functions are objects,
    here,Circle function is an object---> 
        
    function Circle(radius){
    console.log('this',this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    } 

    when we write function Circle(radius), JS will internally 
    use f --> Function(){[native code]} to construct it.
    


const Circle1 = new Function('radius', 
`this.radius = radius;
this.draw = function(){
    console.log('draw');
}`);
const circle = new Circle1(1);
is equivalent to 
Circle.call({}, 1) //here {} specifies the target of this
Circle.apply({}, [1,2,3]); //functions are objects


/* Adding/Removing properties
Objects in JS are dynamic, after we create them we can add extra
property or delete property.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle = new Circle(10);
for (let key in circle){
    console.log(key);
}
circle.location = {x: 1};
circle['location'] = {x: 1};
const propertyName = 'center location';
circle[propertyName] = {x: 1};
delete circle['location'];
*/




/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
};
const circle = new Circle(10);
//To enumerate all the members in an object use for-in loop
for (let key in circle){
    if(typeof circle[key] !== 'function') 
    console.log(key, circle[key]);
}

//To get all the keys in an object, use Object.keys
const keys = Object.keys(circle);
console.log(keys);
//To chk the existence of a property or method in an object use the in operator
if('radius' in circle)
console.log('Circle has a radius'); */


/* Abstraction
Hide the details, show the essentials

function Circle(radius){
    /will not be part of the object( .this), 
    we did not set it as a property of that obj./r = color; / 
    let color ='red'; ---private properties and methods /its scope will be limited to the local function
                    /and hence protected from the outside access we define it as a local variable here    
    
    this.radius = radius;
    let defaultLocation = {x: 0, y: 0}; /instead of setting it as 
                                        as a property to new object
    this.computeOptimumLocation = function(factor){

    }
    this.draw = function(){
        this.computeOptimumLocation(0.1);
        console.log('draw');
    };
}
 const circle = new Circle(10);
 circle.draw();

 */




//primitive vs reference data type in js

//value or primitive type
// let x = 10;
// let y = x;
// x = 20;
//now in console x = 20, y = 10, 
//here x and y are
//completely independent to each other

//reference type
// let x = {value: 10};
// let y = x;
// x.value = 20
//now in console x = 20, y = 20, 
//here x and y are pointing to the same object
//and they have the same values



/* here the object is not stored in the variable 
x, it is stored somewhere else in the memory and 
the address of that memory location is stored 
inside variable x and when we modify that object
using either x or y, the changes are 
immediately visible to the other variable

The take away is:
Primitives are copied by their value
Objects are copied by their reference
*/


// let number = 10;
// function increase(number){
//     number++;
// }
// increase(number);
// console.log(number);

/* here the output is 10, because primitives are 
copied by value. */



// const myCar = {
//     make: 'Toyota',
//     model: 'Land-Rover',
//     color: 'black',
//     year: 1980,
// };
// carAge = function(current){
//     console.log(current - myCar.year);
// }

// carAge(2024);


//Write a code for get fullStack object's keys
// let fullStack = {
// languages: ['JavaScript', 'React', 'HTML'],
// jira: true,
// gitHub: true,
// difficulty: 8,
//};
// old way, not advised anymore
// for (let key in fullStack) {
// console.log(key);
// }
// modern way
//Object.keys(fullStack).forEach(item => console.log(item));
//output : languages, jira, gitHub, difficulty

/* A simple closure
Let’s look at a simple closure example in JavaScript:

function parent() {
    var house = 'WhiteHouse';
   
    function child() {   
        var car = 'Tesla'; 
        console.log('I have:', house, car);
    }
   
    return child;
}
var legacy = parent();
console.log(typeof(legacy)); //legacy is of type function
legacy(); I have: WhiteHouse Tesla 



extend it to nested function

In the above example, we have three functions
 — grandParent() , parent() and child() 
 nested inside each other with variables 
 home , car and scooter respectively.

As per the concept of Closures in 
JavaScript, the inner most nested function 
preserves the scope chain of enclosing 
functions, thus child() function will be 
able to access variables — house and car .
Similarly, as per the concept of Legacy — 
grandParent() passes their house to parent() 
who decides to change the color of the house 
from green to yellow and in-turn passes the 
house and car to their child():

function grandParent() {
    var house = 'GreenHouse';
   
    function parent() {   
        var car = 'Tesla';
        house = 'YellowHouse';
        function child() {   
            var scooter = 'Vespa';
            console.log('I have:', house, car, scooter);
        }
        
        return child;
    }
   
    return parent;
}
var legacyGenX = grandParent();
console.log(typeof(legacyGenX)); //legacyGenX is of type function
var legacyGenY = legacyGenX();
console.log(typeof(legacyGenY)); //legacyGenY is of type function
legacyGenY(); // I have: YellowHouse Tesla Vespa*/

