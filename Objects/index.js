//How Objects in js work    //

console.log("Index JS is running");
const person = {
    firstName: 'Abdisa',
    lastName: 'Bedada',
    birthYear: 1980,
    skills: ['JS', 'ReactJS', 'Python', 'Java'],
    employed: true,
    city: 'Miami',
}

console.log(person.firstName)
console.log(person.employed)

const workingHours = {
    monday: '09:00 - 17:00',
    tuesday: '09:00 - 13:00',
    wednesday: '09:00 - 14:00',
    thursday: '03:00 - 9:00',
    friday: '09:00 - 10:00',
    saturday: '09:00 - 15:00',
    sunday: 'closed'
    }

    const day = prompt('Enter any day you wish to know more about:  ').toLocaleLowerCase()
    console.log(workingHours.monday)
    console.log(workingHours['tuesday'])
    console.log(workingHours[day])

//Index js is running
