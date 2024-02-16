function validate() {
    const ssnInput = document.getElementById('ssn-input').value;
    const resultElement = document.getElementById('result');
    
    // Define the pattern for the SSN
    const ssnPattern = /^(\d{3})-(\d{2})-(\d{4})$/;
    
    // Test the basic pattern
    if (!ssnPattern.test(ssnInput)) {
        resultElement.textContent = "The SSN number you entered is not valid.";
        resultElement.style.color = "red";
        return;
    }
    
    // Extract parts of the SSN
    const parts = ssnInput.match(ssnPattern);
    
    // Validate each part
    const part1 = parseInt(parts[1], 10);
    const part2 = parseInt(parts[2], 10);
    const part3 = parseInt(parts[3], 10);

    if ((part1 === "000" || part1 === "666" || part1 >= "900") ||(part2 === "00") ||(part3 === "0000")) {
        resultElement.textContent = "The SSN number you entered is not valid.";
        resultElement.style.color = "red";
        return;
    }
    
    // If all checks pass
    resultElement.textContent = "The SSN number you entered is valid.";
    resultElement.style.color = "green";
}

