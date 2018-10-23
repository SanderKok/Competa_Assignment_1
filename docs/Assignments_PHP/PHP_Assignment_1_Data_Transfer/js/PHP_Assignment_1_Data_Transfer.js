const homeContent = document.getElementById("homeContent");
const createUserContent = document.getElementById("createUserContent");
const viewUsersContent = document.getElementById("viewUsersContent");

function home() {
	homeContent.classList.remove("hidden");
	createUserContent.classList.add("hidden");
	viewUsersContent.classList.add("hidden");
}

function create() {
	homeContent.classList.add("hidden");
	createUserContent.classList.remove("hidden");
	viewUsersContent.classList.add("hidden");
}

function view() {
	homeContent.classList.add("hidden");
	createUserContent.classList.add("hidden");
	viewUsersContent.classList.remove("hidden");
}