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

    if ((part1 === "000" || part1 === "666" || part1 > "900") ||(part2 === "00") ||(part3 === "0000")) {
        resultElement.textContent = "The SSN number you entered is not valid.";
        resultElement.style.color = "red";
        return;
    }
    
    // If all checks pass
    resultElement.textContent = "The SSN number you entered is valid.";
    resultElement.style.color = "green";
}


/* form Noa

function validateSSN(ssn) {
    // Check if SSN has the correct format
    if (ssn.length !== 11 || ssn.charAt(3) !== '-' || ssn.charAt(6) !== '-') {
        console.log("❌ Invalid: SSN should have the format XXX-XX-XXXX.");
        return false;
    }

    // Extracting parts of SSN
    const [part1, part2, part3] = ssn.split('-');

    // Check first part conditions
    if (part1 === '000' || part1 === '666' || (parseInt(part1) >= 900 && parseInt(part1) <= 999)) {
        console.log("❌ Invalid: First part of SSN is not allowed.");
        return false;
    }

    // Check second part conditions
    if (parseInt(part2) < 1 || parseInt(part2) > 99) {
        console.log("❌ Invalid: Second part of SSN should be from 01 to 99.");
        return false;
    }

    // Check third part conditions
    if (parseInt(part3) < 1 || parseInt(part3) > 9999) {
        console.log("❌ Invalid: Third part of SSN should be from 0001 to 9999.");
        return false;
    }

    // If all checks pass, the SSN is valid
    console.log("🆗 Valid");
    return true;
}

// Test cases
validateSSN("268-26-3556"); // Valid
validateSSN("237-86-7532"); // Valid
validateSSN("304-92-5339"); // Valid
validateSSN("510-72-0765"); // Valid
validateSSN("504-58-0987"); // Valid  



from ahmed 
const input = "000-05-0001";
const input2 = "666-333-44";


const CheckSSN = (ssn) => {
  const part1 = ssn.split("-")[0];
  const part2 = ssn.split("-")[1];
  const part3 =ssn.split("-")[2];

    if (ssn.length !== 11 || ssn.charAt(3) !== '-' || ssn.charAt(6) !== '-') {
        return false;
    } if (isNaN(part1) || isNaN(part2) || isNaN(part3)) { 
        return false;  
    
    }  if (part1 == 0 || part1 == 666 || part1 > 900 ) {
        return false;
    } if (part2 < 1) {
        return false;
    } if (part3 < 1) {
        return false;
    }
    return true;
} 
console.log(CheckSSN(input))*/