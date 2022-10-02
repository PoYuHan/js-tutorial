let sentToAirPort = false;

let p = new Promise(function(resolve, reject) {
    if (sentToAirPort) {
        resolve("from resolve(): send to airport");
    } else {
        reject("from reject(): order cancelled");
    }
});


p
.then(function(message) {console.log(`${message}`)})
.catch(function(message) {console.log(`${message}`)});

let f = fetch('https://jsonplaceholder.typicode.com/users');

f
.then(function(userData) {
    return userData.json();
})
.then(function(jsonData) {
    console.log(jsonData);
});