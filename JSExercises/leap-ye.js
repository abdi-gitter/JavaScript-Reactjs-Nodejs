//finding a leap year in js
let year = 2024; //let the year be 2024

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a leap year."); 
        } else {
            console.log(year + " is not a leap year.");
        }
    } else {
        console.log(year + " is a leap year.");
    }
} else {
    console.log(year + " is not a leap year.");
}

//or

// if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
//     console.log("This is a leap year")
//   } else {
//     console.log("This is not a leap year")
//   }
