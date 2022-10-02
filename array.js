let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Watermelon";

// push would be faster than unshift, because unshift need to reallocate the following element
// to the other position.


fruits.push("Mango");
fruits.push("Strawberry", "Lemon");  // push to add at the last
fruits.unshift("Cherry"); // unshift to add the element at the head
fruits.pop(); // remove the last element
fruits.shift(); // remove the first element, like "unshift", need to reallocate the data too
console.log(fruits);

fruits.length();