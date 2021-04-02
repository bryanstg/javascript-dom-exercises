let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.getElementById("myList");
	let newLi = document.createElement("li");
	newLi.innerHTML = "New Element";
	ul.append(newLi);
});
