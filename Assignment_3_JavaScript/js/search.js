function search() {
	var searchValue = document.getElementById("searchbar").value;
	document.getElementById("searchResult").innerHTML = searchValue;
}

// Seperate URL with user input.
// Example: apiPath = ...;
// Example: input = ...;
// Example: url = apiPath + input;
// And so on...