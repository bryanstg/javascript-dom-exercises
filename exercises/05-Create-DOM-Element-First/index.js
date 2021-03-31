var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
let myDiv = document.getElementById("myDiv");
let paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World";
paragraph.style.background = "yellow";
document.body.appendChild(paragraph);
