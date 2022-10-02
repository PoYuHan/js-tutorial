function showMessage(userName = "Visitor") {
    console.log(`Hi ${userName}, welcome to my JS function`);
}

showMessage();

function sum(num1, num2) {
    let total = num1 + num2;
    return total;
}

s = sum(8, 9);
console.log(s);