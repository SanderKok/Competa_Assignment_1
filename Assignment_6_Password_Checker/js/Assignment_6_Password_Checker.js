function requirements() {
	const firstPassword = document.getElementById("password1");
	const secondPassword = document.getElementById("password2");

	// Here will display 1 of the errors in
	const errorMessage = document.getElementById("errorMessage");

	// Check on this colors
	const goodColor = "rgb(4, 180, 4)";
	const badColor = "rgb(255, 0, 0)";

	// All elements that must be green
	const characters = document.getElementById("characters");
	const specialCharacters = document.getElementById("specialCharacters");
	const numbers = document.getElementById("numbers");
	const upperCase = document.getElementById("upperCase");
	const lowerCase = document.getElementById("lowerCase");

	if (firstPassword.value !== "") {
		if (secondPassword.value !== "") {
			if (firstPassword.value === secondPassword.value) {
				if (characters.style.color === goodColor) {
					// Check if amount of characters are good
					if (specialCharacters.style.color = goodColor) {
						// Check if amount of special characters are good
						if (numbers.style.color === goodColor) {
							// Check if amount of numbers are good
							if (upperCase.style.color === goodColor) {
								// Check if amount of uppercase characters are good
								if (lowerCase.style.color === goodColor) {
									errorMessage.innerHTML = "Password verified.";
									errorMessage.style.color = goodColor;
								} else {
									errorMessage.innerHTML = "Not enough lowercase characters.";
									errorMessage.style.color = badColor;
								}
							} else {
								errorMessage.innerHTML = "Not enough uppercase characters.";
								errorMessage.style.color = badColor;
							}
						} else {
							errorMessage.innerHTML = "Not enough numbers.";
							errorMessage.style.color = badColor;
						}
					} else {
						errorMessage.innerHTML = "Not enough special characters.";
						errorMessage.style.color = badColor;
					}
				} else {
					errorMessage.innerHTML = "Not enough characters.";
					errorMessage.style.color = badColor;
				}
			} else {
				errorMessage.innerHTML = "Passwords are not matching.";
				errorMessage.style.color = badColor;
			}
		} else {
			errorMessage.innerHTML = "Fill in every field please.";
			errorMessage.style.color = badColor;
		}
	} else {
		errorMessage.innerHTML = "Fill in every field please.";
		errorMessage.style.color = badColor;
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
			characters.style.color = "#04B404";
		} else {
			characters.style.color = "#FF0000";
		}
	}
	
	// Check for special characters
	if (inputField.value.match(specialCharactersList)) {
		if (inputField.value.match(specialCharactersList).length >= minAmountOfSpecialCharacters) {
			specialCharacters.style.color = "#04B404";
		} else {
			specialCharacters.style.color = "#FF0000";
		}
	} else {
		specialCharacters.style.color = "#FF0000";
	}
	
	// Check for uppercase letters
	if (inputField.value.match(upperCaseList)) {
		if (inputField.value.match(upperCaseList).length >= minAmountOfUpperCaseLetters) {
			upperCase.style.color = "#04B404";
		} else {
			upperCase.style.color = "#FF0000";
		}
	} else {
		upperCase.style.color = "#FF0000";
	}
	
	// Check for lowercase letters
	if (inputField.value.match(lowerCaseList)) {
		if (inputField.value.match(lowerCaseList).length >= minAmountOfLowerCaseLetters) {
			lowerCase.style.color = "#04B404";
		} else {
			lowerCase.style.color = "#FF0000";
		}
	} else {
		lowerCase.style.color = "#FF0000";
	}
	
	// Checks for numbers
	if (!inputField.value.match(numbersList)) {
		numbers.style.color = "#FF0000";
	} else {
		if (inputField.value.match(numbersList).length >= minAmountOfNumbers){
			numbers.style.color = "#04B404";
		} else {
			numbers.style.color = "#FF0000";
		}
	}
}