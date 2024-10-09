//factorial in java script

function fact(n) {
    if (n < 0) {
        return ;
    } else if (n === 0) {
        return 'Factorial of 0! is 1';
    }

    let result = 1;
    let process = `${n}! is 1`;

    for (let i = 2; i <= n; i++) {
        process += ` * ${i}`;
        result *= i;
    }

    process += `, which is ${result}`;
    return process;
}

console.log(fact(5)); 
