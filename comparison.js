// == in not equal to === (strict equal)
// != is not equal to !== (strict not equal)
// js is using Unicode to trans char to number!!!

"cat" > "car" // True, js will compare each char from the beginning

// JS has to different comparison
// abstract comparison(抽象比較) vs strict comparison(嚴格比較)不做任何類型轉換
console.log(10 == '10'); //True
console.log(10 === '10'); //false

console.log("Homework start!!");

console.log('12' > '20');
console.log(0 == false);
console.log(0 === false);