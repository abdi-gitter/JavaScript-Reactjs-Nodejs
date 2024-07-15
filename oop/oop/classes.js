//Class
class Person{
    // Static methods/properties belong to ONLY the class itself
    static count = 0

    static logCount(){
        console.log(this.count)
    }

    // We use the constructor to SET PROPERTIES
    constructor(first, last){
        this.first = first;
        this.last = last;

        Person.count++
        console.log(`${Person.count} Person/people now exist.`)
    }

    logFullName(){
        console.log(`${this.first} ${this.last}`)
    }

    // Arrow functions:
    logNameArrow = ()=>{
        console.log(`${this.first} ${this.last}`)
    }
}

// object instantiation
// we're creating objects (instances) of the Person class
const Chase = new Person("Chase", "Lones")
const John = new Person("John", "Doe")
const Jane = new Person("Jane", "Doe")

Person.logCount() // 3
