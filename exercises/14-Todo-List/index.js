// Your code here
let inputText = document.querySelector("#addToDo");
let entireList = document.querySelector("ul");
let span = document.querySelector("span");

function addTask() {
	let ul = document.querySelector("ul");
	let inputValue = inputText.value;
	let newListItem = document.createElement("li");
	newListItem.innerHTML = `
    <span><i class="fa fa-trash"></i></span> 
    ${inputValue}
    `;
	ul.append(newListItem);
	inputText.value = "";
}

function deleteTask(event) {
	if (event.target.className === "fa fa-trash") {
		let trashIcon = event.target;
		trashIcon.parentNode.parentNode.remove();
	}
	if (event.target.tagName === "SPAN") {
		let trashIconSpan = event.target;
		trashIconSpan.parentNode.remove();
	}
}

window.onload = function() {
	inputText.addEventListener("change", addTask);

	entireList.addEventListener("click", deleteTask);
};
