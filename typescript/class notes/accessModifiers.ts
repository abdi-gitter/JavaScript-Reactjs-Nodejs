class Employee{
    // PRIVATE - only accessible WITHIN this class
    // even if we create a child class, the child class cannot access private properties/methods!!!
    private id: number

    // PROTECTED - accessible from the class and its subclasses
    protected salary: number

    // PUBLIC: accessible from anywhere
    name: string //by default, properties and methods are public.

    constructor(id:number, name:string, salary:number){
        this.id = id
        this.name = name
        this.salary = salary
    }

    logId(){
        console.log(this.id)
    }
}

class Employee2 extends Employee{
    readonly bonus: number = 1000
    constructor(id:number, name:string, salary:number){
        super(id, name, salary)
    }

    logSalary(){
        console.log(this.salary)
    }
}

let emp1 = new Employee(1, 'John', 80000)
// console.log(emp1.id) // error, id is private
emp1.logId()


let emp2 = new Employee2(2, 'Jane', 90000)
// console.log(emp2.salary) // error, salary is protected, so from outside of the classes, we can think of this as private
console.log(emp2.bonus) // 1000
// emp2.bonus = 2000 // error, bonus is readonly

// ---------------------------------- STATIC ----------------------------------
// static properties and methods are only accessible from the CLASS.
// If we make an object using the class, these properties and methods will not be a part of the object.

class SomeClass{
    static count:number = 0

    public name: string
    private health: number
    public damage: number

    constructor(name:string, health:number, damage:number){
        this.name = name,
        this.health = health,
        this.damage = damage

        SomeClass.count++
    }

    static logCount(){
        console.log("There are " + SomeClass.count + " enemies!")
    }

    attack(){
        console.log(this.name+' attacking for ' + this.damage + ' damage!')
    }

    logHealth(){
        console.log(this.health)
    }

    takeDamage(damage:number){
        this.health -= damage
        console.log(this.name + ' took ' + damage + ' damage!')
        console.log(this.name + ' has ' + this.health + ' health remaining!')
    }
}

const dragon = new SomeClass('Dragon', 100, 10)
const goblin = new SomeClass('Goblin', 50, 5)
// I've run the constructor here twice, so the code inside the constructor has run twice.
// This means I've incremented my static count variable twice.

SomeClass.logCount() // 2

// console.log(goblin.count) // undefined
// remember, static properties and methods are only accessible from the class itself.

dragon.takeDamage(goblin.damage)