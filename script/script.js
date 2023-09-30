const passwordBox = document.getElementById("password");
const copy=document.getElementById("copy");
const length = 12;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`! @#$%^&*()_-+={[}]|\:;";
const allchar = UpperCase + LowerCase + numbers + symbols;
function generate() {
    let password = "";
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (length > password.length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
  passwordBox.value=password;
}
function copyPass(){
    if(passwordBox.value==""){
        alert("Nothing to copy");
        return;
    }
    passwordBox.select();
    document.execCommand("copy");
    copy.setAttribute("src","res/copied.png");
    setTimeout(copied,2000);
}
function copied(){
    copy.setAttribute("src","res/copy.png");
}