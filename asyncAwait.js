let isResolve = false;

function sendRequest() {
    return new Promise(function(resolve, reject) {
        if (isResolve){
            setTimeout(function() {
                resolve("Justin Han");
            }, 2000);
        } else {
            setTimeout(function() {
                reject("Request requested failed due to server error");
            }, 2000);
        }
    });
}

// let promise = sendRequest();

// promise.then(function(userName){
//     console.log(userName);
// })

// This section is to demonstrate using send request
/*
async function getUsername() {
    try {
        let username = await sendRequest();
        console.log(username);
    } catch (message) {
        console.log(`Error: ${message}`);
    }
}

getUsername();
*/

//This section is using fetch
async function getUsername() {
    try {
        let username = await fetch("https://jsonplaceholder.typicode.com/users");
        username = await username.json();
        console.log(username);
    } catch (message) {
        console.log(`Error: ${message}`);
    }
}

getUsername();