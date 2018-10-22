function openNav() {
	document.getElementById("theSidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("theSidenav").style.width = "0";
	hideAssignment2();
	hidePHP();
}

function displayAssignment2() {
	for (let index = 0; index < 5; index++) {
		const ASSIGNMENT_2_SUBNAV_ITEMS = document.getElementsByClassName("sublist-assignment-2")[index];
		ASSIGNMENT_2_SUBNAV_ITEMS.classList.remove("hidden");
	}
}

function hideAssignment2() {
	for (let index = 0; index < 5; index++) {
		const ASSIGNMENT_2_SUBNAV_ITEMS = document.getElementsByClassName("sublist-assignment-2")[index];
		ASSIGNMENT_2_SUBNAV_ITEMS.classList.add("hidden");
	}
}

function displayPHP() {
	for (let index = 0; index < 7; index++) {
		const ASSIGNMENT_2_SUBNAV_ITEMS = document.getElementsByClassName("sublist-php")[index];
		ASSIGNMENT_2_SUBNAV_ITEMS.classList.remove("hidden");
	}
}

function hidePHP() {
	for (let index = 0; index < 7; index++) {
		const ASSIGNMENT_2_SUBNAV_ITEMS = document.getElementsByClassName("sublist-php")[index];
		ASSIGNMENT_2_SUBNAV_ITEMS.classList.add("hidden");
	}
}