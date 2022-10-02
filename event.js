function showAlert() {
    alert("Hey function!!");
}

function secondFunction(event) {
    alert("Hey second function!!");
    alert(`Coordinate: ${event.clientX} - ${event.clientY}`);
}

// By DOM
let btn = document.getElementById("myButton");
// btn.onclick = showAlert; // we set the showAlert to onclick, no need to add "()" behind showAlert
// By eventlistener

// these 2 event listener will activate sequencely, it won't be covered.
btn.addEventListener('click', showAlert);
btn.addEventListener('click', secondFunction);
btn.removeEventListener("click", showAlert);