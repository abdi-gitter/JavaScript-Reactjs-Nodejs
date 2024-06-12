//Student
const student = {
    firstName: 'Jane',
    lastName: 'smith',
    age: 34,
    skills: ['JS', 'ReactJS', 'NodeJS'],
}

const teacher = {
    firstName: 'Amanda',
    lastName: 'Bob',
    age: 44,
    skills: ['JS', 'ReactJS', 'Python'],
    employed: true,
    city: 'Miami',
}
const student2 = new Object()
student2.firstName = 'Abdisa',
student2.lastName = 'Bedada',
student2.age = 44;
student2.employed = false;

console.log(student)
console.log(teacher)
console.log(student2)

//create object using .create() method
const student3 = Object.create(null)
console.log(student3)
student3.firstName = 'Menen',
student3.lastName = 'Bedada',
student3.age = 40;
student3.employed = false;

console.log(student3)



