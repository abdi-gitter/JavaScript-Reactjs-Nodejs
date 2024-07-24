// INTERFACES
// an interface is a way to define a contract on a function with respect to the arguments and their type
// it's just like a function signature!
// this means if a class uses the interface, it must have the same properties and methods as the interface!

// COMMON INTERVIEW QUESTION: What is the difference between an interface and a type?
// interfaces can only contain signatures of methods and properties, not the actual implementation.
// interfaces can extend other interfaces, but not classes.
// interfaces can also be used for functions
// a class can implement multiple interfaces, but only extend one class.
// types are used for variables and functions, and can be used for objects as well, 
// but interfaces are more common for objects.

interface Calendar{
    events: string[]
    addEvent(event:string):void
}

class LmsCalendar implements Calendar{
    events: string[] = []

    constructor(){
        this.events = []
    }
    addEvent(event: string): void {
        this.events.push(event)
    }
}

// We use interfaces for objects and types.
// types are used for variables and functions, and can be used for objects as well, 
// but interfaces are more common for objects.

// interfaces can only contain "signatures" of methods and properties, not the actual implementation.
// interfaces can extend other interfaces, but not classes.
// a class can implement multiple interfaces, but only extend one class.
interface Color{
    color: {r:number, g:number, b:number}
}

interface Shape2{
    area: number;
}

class Square2 implements Color, Shape2{
    color: {r:number, g:number, b:number}
    area: number

    constructor(color:{r:number, g:number, b:number}, area:number){
        this.color = color
        this.area = area
    }
}

// we can also use interfaces to define function types
interface Add{
    (a:number, b:number):number
}

let add2: Add = (a:number, b:number):number => a+b