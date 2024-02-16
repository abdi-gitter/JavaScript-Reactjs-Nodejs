function validate() {
    const ssnInput = document.getElementById('ssn-input').value;
    const resultElement = document.getElementById('result');
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;

    if (ssnPattern.test(ssnInput)) {
        resultElement.textContent = "The SSN number you entered is valid.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "The SSN number you entered is not valid.";
        resultElement.style.color = "red";
    }
}
