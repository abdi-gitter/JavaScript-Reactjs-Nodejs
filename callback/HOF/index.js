const radius = [3, 2, 1, 4];

const area = function(radius){
return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
  }

//to make it work exactly like arr.map

/* Array.prototype.calculate =  function(logic){
    const output = [];
    for(let i=0; i < this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
  };
  
  now we can say 
  console.log(radius.calculate(area));
  */ 
const calculate  = function(radius, logic){
    const output = [];
    for(let i=0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
  };
  
  
//console.log(radius.map(area)) we wrote our own map which in 
//this case is calculate, if we substitute radius with arr --> arr.map(area)


console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));



