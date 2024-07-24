// class Car {
//     constructor(cylinders, color, tires, make, model){
//         this.cylinders = cylinders,
//         this.color = color,
//         this.tires = tires,
//         this.make = make,
//         this.model = model
//     }

//     logDetails(){
//         console.log(`This car is a ${this.make} ${this.model} with ${this.cylinders} cylinders, ${this.tires} tires, and is ${this.color}.`);
//         return this;
//     }

//     honk(){
//         console.log("Beep beep! from " + this.make + " " + this.model + "!");
//         return this;
//     }
// }

// CLASSES IN TYPESCRIPT:
// Classes in typescript are similar to objects in javascript.


class Car {

    // before we assign our properties, we need to define their types.
    // We should do this before the constructor.
    cylinders: number;
    color: string;
    tires: number;
    make: string;
    model: string;

    constructor(cylinders:number, color:string, tires:number, make:string, model:string){
        // you'll see we still have errors because our properties don't have types like we think they do.
        // this is because we need to define our property types in the class! 
        // (We fixed this by adding types above our constructor)
        this.cylinders = cylinders,
        this.color = color,
        this.tires = tires,
        this.make = make,
        this.model = model
    }

    logDetails(){
        console.log(`This car is a ${this.make} ${this.model} with ${this.cylinders} cylinders, ${this.tires} tires, and is ${this.color}.`);
        return this;
    }

    honk(){
        console.log("Beep beep! from " + this.make + " " + this.model + "!");
        return this;
    }
}

const hondaAccord = new Car(4, "blue", 4, "Honda", "Accord");

hondaAccord.logDetails().honk();

// ----------------------------------- Abstract classes: -----------------------------------
// Abstract classes are classes that cannot be instantiated.
// They are used to define a base class that other classes can inherit from.
// The methods are similar to function signatures in function overloading as they have no actual implementation.
// the implementation is left to the child classes.

abstract class Shape{
    abstract area():number
}

class Square extends Shape{
    length: number
    constructor(length:number){
        // even though we have no properties in the parent class, we still need to call super() 
        // This is because in order to create an instance of a class that extends another class, we need to call super()
        super()
        this.length = length
    }

    area(){
        return this.length * this.length
    }
}

console.log('Square area: ', new Square(5).area())

class Triangle extends Shape{
    base: number
    height: number
    constructor(base:number, height:number){
        super()
        this.base = base
        this.height = height
    }

    area(){
        return 0.5 * this.base * this.height
    }
}

// -------------------------------- End Abstract Classes: -----------------------------------

// ----------------------------------- Access Modifiers: ------------------------------------
// PRIVATE
// PUBLIC
// PROTECTED
// READONLY
