//prompt  response


let num = prompt("Enter a number to display:");
num = parseInt(num); 

let output1;

if (num > 20) {
    output1 = (num - 20) * 2;
} else 
{
    output1 = 20 - num;
}
console.log(output1);
