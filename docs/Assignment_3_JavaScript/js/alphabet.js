var alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z"];
var alphaText = "";
var i;

function loadAlphabet() {
	var letterNav = document.getElementById('letterNav');
	
	for (i = 0; i < alphabet.length; i++) {
		alphaText += alphabet[i] + "<br>";
	}
	letterNav.innerHTML = alphaText;
}

window.onload = loadAlphabet;
