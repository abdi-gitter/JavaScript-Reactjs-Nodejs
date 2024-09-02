//Question
//How to find a leap year in javascript// 

//First, let's create a function isLeapYear that takes 
//a year as an input and returns a Promise. The Promise 
//resolves if the year is a leap year and rejects if it is not.


function isLeapYear(year) {
    return new Promise((resolve, reject) => {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        resolve(`${year} is a leap year.`);
      } else {
        reject(`${year} is not a leap year.`);
      }
    });
  }

  isLeapYear(2020)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

isLeapYear(2021)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

    //using async and await
  async function checkLeapYear(year) {
    try {
      const message = await isLeapYear(year);
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Example usage for testing 
  checkLeapYear(2024); // This should log that 2024 is a leap year.
  checkLeapYear(2023); // This should log that 2023 is not a leap year.
  
