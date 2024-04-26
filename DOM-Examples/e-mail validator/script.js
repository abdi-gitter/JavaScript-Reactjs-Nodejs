//function to validate the email
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

/* function validateEmail(email) {
    // Check if email starts with '@' symbol
    if (email.startsWith('@')) {
        console.log("❌ Invalid: Email should not start with '@' symbol.");
        return false;
    }

    // Check if there is more than one '@' symbol
    if (email.split('@').length !== 2) {
        console.log("❌ Invalid: Email should contain exactly one '@' symbol.");
        return false;
    }

    const [localPart, domainPart] = email.split('@');

    // Check if local part contains invalid characters
    for (let i = 0; i < localPart.length; i++) {
        if (!validChars.includes(localPart.charAt(i))) {
            console.log("❌ Invalid: Local part contains invalid characters.");
            return false;
        }
    }

    // Check if domain part contains invalid characters
    for (let i = 0; i < domainPart.length; i++) {
        if (!validChars.includes(domainPart.charAt(i))) {
            console.log("❌ Invalid: Domain part contains invalid characters.");
            return false;
        }
    }

    // Check if there is at least one '.' after the '@' sign
    if (domainPart.indexOf('.') === -1) {
        console.log("❌ Invalid: There should be at least one '.' after the '@' sign.");
        return false;
    }

    // Check if there are at least two characters after the last '.' sign
    const lastDotIndex = domainPart.lastIndexOf('.');
    if (domainPart.length - lastDotIndex <= 2) {
        console.log("❌ Invalid: There should be at least two characters after the '.' sign.");
        return false;
    }

    // If all checks pass, the email is valid
    console.log("🆗 Valid");
    return true;
}

// Test cases to validate
validateEmail("name.last_Name@company.com"); // Valid
validateEmail("name.143@company.co"); // Valid
validateEmail("name.last-Name@company.com"); // Invalid
validateEmail("name.last_Name@company.c"); // Invalid
validateEmail("name.last_Name@company"); // Invalid */


/* from ahemed
E mail Validator : const input = "ahmed.waji@gmail.com";
const input2 = "ahmed-wajih@@gmail.c";


const checkMail = (item) => {

    const mail = item.toLowerCase();
    const ValidChar = "abcdefghijklmnopqrstuvwxyz0123456789_+.@"

    for ( let i = 0; i < mail.length; i++) {
        if (! ValidChar.includes(mail[i])) {
            return false;
        } 
    } 
    if ( mail[0] === "@" || mail.indexOf("@") !== mail.lastIndexOf ("@") || ! mail.includes("@") ) {
        return false;
    } if (mail.slice(mail.lastIndexOf(".") + 1).length < 2) {
        return false;
    }  if ( !mail.split("@")[1].includes(".")) {
        return false;
    }
return true
}
console.log(checkMail(input)) */
