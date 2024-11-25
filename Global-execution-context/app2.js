//Global Execution Context

"use strict"
 //this in global space 
console.log(this); //global object
 


//this inside a function 
function x(){
    //the value depends on strict / non strict mode
console.log(this)
}
x();


/* 
const obj = {
    a: 10,
    x: function () {
        console.log(this.a); //10
      },
};

obj.x(); */


//this inside object's method
const student = {
    name: "Abdisa",
    printName: function(){
        console.log(this)
    },
};

student.printName();
const student2 = {
    name: "Menen",
    
};

//value of this = student 2 = Menen
student.printName.call(student2) 



//this inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this); //it retains the this value of the enclosing lexical context
    },
};
obj.x();




//this inside nested arrow function

onst obj2 = {
    a: 10,
    x: function() {
        const y = () =>{
        console.log(this); //arrow functions don't provide their own this binding 
                       //(it retains the this value of the enclosing lexical context)
        }
        y()
    },
};
obj2.x();

//this inside DOM element is a reference to HTMLelement.
