for (let i = 1; i <= 5; i++) {
    console.log(`Hello user${i}, this is a emergency information`);
}

// break and continue are the same use as in the python

//while loop check the condition first, then run the code
let total = 0;
let input = prompt("請輸入數字");
while (input !== 'q') {
    total += parseInt(input);
    input = prompt("請輸入數字");
}

console.log(`Total: ${total}`);

// do while loop run the code first, then check the condition
do{
    console.log(k);
    k++;
} while (k<=5);

