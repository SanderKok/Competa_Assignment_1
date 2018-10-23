// Not logged in
const homeContent = document.getElementById("homeContent");
const registerContent = document.getElementById("registerContent");
const loginContent = document.getElementById("loginContent");

// Logged in
const dashboardContent = document.getElementById("dashboardContent");
const logoutContent = document.getElementById("logoutContent");
const userContent = document.getElementById("userContent");

// Not logged in
function home() {
	loginContent.classList.add("hidden");
	homeContent.classList.remove('hidden');
	registerContent.classList.add('hidden');
}

// Not logged in
function register() {
	loginContent.classList.add("hidden");
	homeContent.classList.add('hidden');
	registerContent.classList.remove('hidden');
}

// Not logged in
function login() {
	loginContent.classList.remove("hidden");
	homeContent.classList.add('hidden');
	registerContent.classList.add('hidden');
}

// Logged in
function dashboard() {
	dashboardContent.classList.remove("hidden");
	logoutContent.classList.add("hidden");
	userContent.classList.add("hidden");
}

// Logged in
function logout() {
	dashboardContent.classList.add("hidden");
	logoutContent.classList.remove("hidden");
	userContent.classList.add("hidden");
}

// Logged in
function users() {
	dashboardContent.classList.add("hidden");
	logoutContent.classList.add("hidden");
	userContent.classList.remove("hidden");
}