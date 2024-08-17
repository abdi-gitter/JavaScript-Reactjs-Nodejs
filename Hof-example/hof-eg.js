//How Higher order functions work in javascript//

const radius = [3, 2, 1, 4];
const calculateArea = function (radius) {
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
  }
  console.log(calculateArea(radius))


  const calculateCircumference = function(radius){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
  }
  console.log(calculateCircumference(radius))
  

  const calculateDiameter = function(radius){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
  }
  console.log(calculateDiameter(radius))
  
