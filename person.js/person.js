function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    }
    const person = new Person('Abdisa', 'Bedada')
    person.nationality = 'Ethiopian'
    person.prototype.nationality = 'American'
    const person1 = new Person('Menen' 'Bedada')
    console.log(person1)
  
    person.age = 44
    console.log(Person)