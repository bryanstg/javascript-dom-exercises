let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newDiv = document.createElement("div");
	newDiv.innerHTML = "Hello world";
	newDiv.style.background = "yellow";
	document.body.appendChild(newDiv);
});
