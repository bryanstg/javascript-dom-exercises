window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// Adding countries to the select option
	let selectInput = document.querySelector("#mySelect");

	countries.forEach((countrie, index) => {
		let optionElement = document.createElement("option");
		optionElement.value = countrie;
		optionElement.innerHTML = countrie;
		return selectInput.append(optionElement);
	});

	//Adding the event to select
	selectInput.addEventListener("change", event => {
		alert(event.target.value);
	});
};
