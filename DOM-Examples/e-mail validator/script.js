function validateEmail() {
    const emailInput = document.getElementById('email-input').value;
    const resultElement = document.getElementById('result');
    const emailPattern = /^[a-zA-Z0-9_+.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;

    if (emailInput.startsWith('@') || (emailInput.match(/@/g) || []).length !== 1) {
        resultElement.textContent = "The email address you entered is not valid.";
        resultElement.style.color = "red";
        return;
    }

    if (emailPattern.test(emailInput)) {
        resultElement.textContent = "The email address you entered is valid.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "The email address you entered is not valid.";
        resultElement.style.color = "red";
    }
}
