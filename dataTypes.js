// The special value in JS
console.log(1/0); // "Infinity", divided by 0

console.log("World" - 3); //"NaN", not a number

console.log(99999999999999999999999999n - 99999999999999999999999998n) // "n" represent big number, the result will be 1n.

let message1 = "Message 1"; // The '' and "" are the same in js.
let message2 = 'Message 2';

age = 10;
let message3 = `Message 3 are left by a ${age} years old guy.`; // The `` in js can be used to show string with variable inside.
console.log(message3);  

// 'null' is not the same with 'undefine'

let user = {
    name: "John",
    age: 18,
};

console.log(user);
console.log(user.name);