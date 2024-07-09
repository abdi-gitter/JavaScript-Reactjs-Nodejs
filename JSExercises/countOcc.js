//count occurences in js
let d = 2;
let low = 10;
let high = 23;
let count = 0;
for(let i = low; i<=high; i++){
    let currNumber = i;
    while(currNumber > 0){
    let lastDig = currNumber%10;
    if(lastDig ===d){
        count++;
    }
    currNumber = currNumber/10;
  }
}
console.log('The digit${d} occurs ${count} times between ${low} and ${high}')
