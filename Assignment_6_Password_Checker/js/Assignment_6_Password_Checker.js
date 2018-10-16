function requirements() {
	const firstPassword = document.getElementById("password1");
	const secondPassword = document.getElementById("password2");

	// Here will display 1 of the errors in
	const errorMessage = document.getElementById("errorMessage");

	// All elements that must be green
	const characters = document.getElementById("characters");
	const specialCharacters = document.getElementById("specialCharacters");
	const numbers = document.getElementById("numbers");
	const upperCase = document.getElementById("upperCase");
	const lowerCase = document.getElementById("lowerCase");

	// Check if fields are not empty
	if (firstPassword.value !== "" && secondPassword.value !== "") {

		// Check if passwords are similar
		if (firstPassword.value === secondPassword.value) {

			// Check if everything is good
			if (characters.classList.contains("restrictionListItemGood") && specialCharacters.classList.contains("restrictionListItemGood") && numbers.classList.contains("restrictionListItemGood") && upperCase.classList.contains("restrictionListItemGood")&& lowerCase.classList.contains("restrictionListItemGood")) {
				errorMessage.innerHTML = "Password verified.";
				errorMessage.classList.add("restrictionListItemGood");
				errorMessage.classList.remove("restrictionListItem");
			} else {
				// Not everything is good
				errorMessage.innerHTML = "Something is wrong with the password.";
				errorMessage.classList.remove("restrictionListItemGood");
				errorMessage.classList.add("restrictionListItem");
			}
		} else {
			// Passwords are not matching
			errorMessage.innerHTML = "Passwords are not matching.";
			errorMessage.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	} else {
		// Not every field is filled in
		errorMessage.innerHTML = "Fill in every field please.";
		errorMessage.classList.remove("restrictionListItemGood");
		errorMessage.classList.add("restrictionListItem");
	}
}

const inputField = document.getElementById("password1");

inputField.onkeyup = function() {
	const characters = document.getElementById("characters");
	const specialCharacters = document.getElementById("specialCharacters");
	const numbers = document.getElementById("numbers");
	const upperCase = document.getElementById("upperCase");
	const lowerCase = document.getElementById("lowerCase");
	let minAmountOfCharacters = 8;
	let minAmountOfSpecialCharacters = 1;
	let minAmountOfNumbers = 2;
	let minAmountOfUpperCaseLetters = 1;
	let minAmountOfLowerCaseLetters = 1;
	const specialCharactersList = /[[\]^$.|?*#!%+(){}]/g; // Special Characters
	const numbersList = /[0-9]/gi; // Numbers 0 - 9
	const upperCaseList = /[A-Z]/g; // Upper case letters A - Z
	const lowerCaseList = /[a-z]/g; // Lower case letters a - z

	// Checks for characters
	if(inputField.value.length !== null){
		if (inputField.value.length >= minAmountOfCharacters) {
			characters.classList.add("restrictionListItemGood");
			errorMessage.classList.remove("restrictionListItem");
		} else {
			characters.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	}
	
	// Check for special characters
	if (inputField.value.match(specialCharactersList)) {
		if (inputField.value.match(specialCharactersList).length >= minAmountOfSpecialCharacters) {
			specialCharacters.classList.add("restrictionListItemGood");
			errorMessage.classList.remove("restrictionListItem");
		} else {
			specialCharacters.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	} else {
		specialCharacters.classList.remove("restrictionListItemGood");
		errorMessage.classList.add("restrictionListItem");
	}
	
	// Check for uppercase letters
	if (inputField.value.match(upperCaseList)) {
		if (inputField.value.match(upperCaseList).length >= minAmountOfUpperCaseLetters) {
			upperCase.classList.add("restrictionListItemGood");
			errorMessage.classList.remove("restrictionListItem");
		} else {
			upperCase.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	} else {
		upperCase.classList.remove("restrictionListItemGood");
		errorMessage.classList.add("restrictionListItem");
	}
	
	// Check for lowercase letters
	if (inputField.value.match(lowerCaseList)) {
		if (inputField.value.match(lowerCaseList).length >= minAmountOfLowerCaseLetters) {
			lowerCase.classList.add("restrictionListItemGood");
			errorMessage.classList.remove("restrictionListItem");
		} else {
			lowerCase.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	} else {
		lowerCase.classList.remove("restrictionListItemGood");
		errorMessage.classList.add("restrictionListItem");
	}
	
	// Checks for numbers
	if (!inputField.value.match(numbersList)) {
		numbers.classList.remove("restrictionListItemGood");
		errorMessage.classList.add("restrictionListItem");
	} else {
		if (inputField.value.match(numbersList).length >= minAmountOfNumbers){
			numbers.classList.add("restrictionListItemGood");
			errorMessage.classList.remove("restrictionListItem");
		} else {
			numbers.classList.remove("restrictionListItemGood");
			errorMessage.classList.add("restrictionListItem");
		}
	}
}