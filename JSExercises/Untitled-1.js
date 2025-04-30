//temprature converter
//Celsius to Fahrenheit


const tempInCelsius = 25;
const tempInFahrenheit = (tempInCelsius * 9/5) + 32; //cel to fahr
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit }°F`);
const tempInFahrenheit2 = 77;
const tempInCelsius2 = (tempInFahrenheit2 - 32) * 5/9;//fahr to cel
console.log(`${tempInFahrenheit2}°F is equal to ${tempInCelsius2}°C`);

// 

or
// const temp = 50
// const tempName = "f"

// if (tempName.toUpperCase() === "C"){
//   const celToFahTemp = ((9 * temp) + (32*5))/5;
//   console.log(temp + "C converted to Fahrenheit is: " + celToFahTemp + "F");
// } else if (tempName.toUpperCase() === "F") {
//   const fahToCelTemp = (5 *(temp - 32)) / 9;
//   console.log(temp + "F converted to Celsius is: " + fahToCelTemp + "C");
// } else {
//   console.log("This is a Fahrenheit - Celcius converter")
// }
