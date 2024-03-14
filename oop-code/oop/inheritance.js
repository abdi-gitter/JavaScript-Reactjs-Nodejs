class Person {
    constructor(firstName, lastName){
        this.first = firstName
        this.last = lastName
    }
    logPerson(){
        console.log(`${this.first} ${this.last}`)
    }
}

class Employee extends Person{
    constructor(firstName, lastName, jobTitle, salary){
        super(firstName, lastName)
        this.jobTitle = jobTitle
        this.salary = salary
    }
    logJobDetails(){
        console.log(`${this.first} ${this.last} is currently working as a ${this.jobTitle} and earning: $${this.salary}`)
    }
}

const chase = new Person("Chase", "Lones")
console.log(chase.first) // Chase
console.log(chase.last) // lones
chase.logPerson() // Chase Lones

const gulnar = new Employee('Gulnar', 'Hasan-zada', 'Principal Fullstack Develoer', 350000)
console.log(gulnar.first)
console.log(gulnar.last)
console.log(gulnar.jobTitle)
console.log(gulnar.salary)

gulnar.logJobDetails()