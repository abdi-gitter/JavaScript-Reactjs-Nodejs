function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    }
    Person.prototype.nationality = 'American'
    const person1 = new Person('Abdisa', 'Bedada')
    console.log(person1.nationality)

    person1.nationality = 'Ethiopian'
    console.log(person1.nationality)
    
    const person2 = new Person('Menen','Bedada')
    console.log(person2.nationality)
  
    const person3 = new Person('Cage', 'Ragnar')
    person3.nationality = 'Chines'
    console.log(person1)
    console.log(person2)
    console.log(person3)