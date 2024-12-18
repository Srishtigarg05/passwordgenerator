var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
var passwordLength = 8;

function genpassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("passwordOutput").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("passwordOutput").value;
    navigator.clipboard.writeText(copyText)//it will copy the text to the clipboard 
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => console.error("Failed to copy: ", err));
}