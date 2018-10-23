const timer = null;
let currentSlide = 0,
	slides = document.getElementsByTagName("img");
let slideInterval = setInterval(nextSlide, 3000);
let playing = true;

	// Previous slide
function prevSlide() {
	currentSlide--
	console.log(currentSlide);
	
	if (currentSlide < 0) {
		currentSlide = 3;
	} else if (currentSlide === 0) {
		document.getElementById("slide1").style.display = "block";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "none";
	} else if (currentSlide === 1){
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "block";
		document.getElementById("slide3").style.display = "none";
	} else if (currentSlide === 2){
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "block";
	} else {
		currentSlide = 3;
	}
}

	// Next slide
function nextSlide() {
	currentSlide++
	console.log(currentSlide);
	
	if (currentSlide > 2) {
		currentSlide = -1;
	} else if (currentSlide === 0) {
		document.getElementById("slide1").style.display = "block";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "none";
	} else if (currentSlide === 1){
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "block";
		document.getElementById("slide3").style.display = "none";
	} else if (currentSlide === 2){
		document.getElementById("slide1").style.display = "none";
		document.getElementById("slide2").style.display = "none";
		document.getElementById("slide3").style.display = "block";
	} else {
		currentSlide = 0;
	}
}

// Set the var for the pause button
const pauseButton = document.getElementById("pause");

// Pause  auto-play
function pauseSlide() {
	console.log("Paused.");
	playing = false;
	clearInterval(slideInterval);
}

// Resume auto-play
function playSlide() {
	console.log("Resumed.");
	playing = true;
	slideInterval = setInterval(nextSlide, 3000);
}

// Add onClick event to the pause button
// If it is auto playing, it will pause.
// If it is NOT auto playing, it will start.
pauseButton.onclick = function() {
	if(playing) {
		const text = "Paused.";
		const boldText = text.bold();
		document.getElementById("playing-or-paused").innerHTML = boldText;
		pauseSlide();
	} else {
		document.getElementById("playing-or-paused").innerHTML = "";
		playSlide();
	}
}

// Get key pressed
let keyCode = "";

function getKey(e) {
	keyCode = e.keyCode
	
	if (keyCode === 39) {
		nextSlide();
	}
	if (keyCode === 37) {
		prevSlide();
	}
}
document.onkeydown = getKey;