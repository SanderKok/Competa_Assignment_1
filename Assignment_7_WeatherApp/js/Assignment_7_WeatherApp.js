function updateDate() {
	// Creates a new date
	newDate = new Date();

	// All days outwritten
	const fullDays = [
		"SUNDAY",
		"MONDAY",
		"TUESDAY",
		"WEDNESDAY",
		"THURSDAY",
		"FRIDAY",
		"SATURDAY"
	];

	// All months outwritten
	const fullMonths = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC"
	];

	// Get all needed time types
	let day = newDate.getDate();
	let theCurrentDay = newDate.getDay();
	let month = newDate.getMonth();
	let hours = newDate.getHours();
	let minutes = newDate.getMinutes();

	// Get month in letters
	let writtenMonth = fullMonths[month];

	// Get day in letters
	let writtenDay = fullDays[theCurrentDay];

	// Put "0" infront of day if value is below 10
	if (day < 10) {
		day = "0" + day;
	}

	// Put "0" infront of hours if value is below 10
	if (hours < 10) {
		hours = "0" + hours;
	}

	// Put "0" infront of day if value is below 10
	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	// Combine hours and minutes
	let time = hours + ":" + minutes;

	// Combine everything for the full date
	fullDate = writtenDay + " | " + writtenMonth + " " + day + " | " + time;
}

// For the weather of your own location
function myPosition (position){
	// API Key build-up
	const MY_KEY = config.MY_KEY;
	const SECRET_KEY = config.SECRET_KEY;
	const KEY_2 = config.KEY_2;
	// API Key for Weather thingy
	const apiKey = MY_KEY + SECRET_KEY + KEY_2;
	
	const firstCountryImage = document.getElementById("firstCountryImage");
	const firstWeatherTitle = document.getElementById("firstWeatherTitle");
	const dateText = document.getElementById("firstWeatherDate");
	const firstRandomWarmth1 = document.getElementById("firstRandomWarmth1");
	const firstWeatherWarmth = document.getElementById("firstWeatherWarmth");
	const firstWeatherIcon = document.getElementById("firstWeatherIcon");
	const firstRandomWarmth2 = document.getElementById("firstRandomWarmth2");

	const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+ position.coords.latitude + "&lon=" + position.coords.longitude + "&APPID=" + apiKey + "&units=metric";
	fetch (weatherUrl)
	.then (response => {
		return response.json();
	}).then(weatherResponse => {
		firstCountryImage.setAttribute("src", "https://www.countryflags.io/" + weatherResponse.sys.country + "/flat/64.png");
		firstWeatherTitle.innerHTML = weatherResponse.name;
		dateText.innerHTML = fullDate;
		firstWeatherIcon.setAttribute("src", "http://openweathermap.org/img/w/" + weatherResponse.weather[0].icon + ".png");
		firstRandomWarmth1.innerHTML = Math.floor(weatherResponse.main.temp - 5) + "°C";
		firstWeatherWarmth.innerHTML = Math.floor(weatherResponse.main.temp) + "°C";
		firstRandomWarmth2.innerHTML = Math.floor(weatherResponse.main.temp + 5) + "°C";
	})
	.catch(error => {
		console.log(error)
	});
}

function searchedLocation() {
	// API Key for weather thingy when searched
	const apiKey = "67767d82a6918525b2d069f7cc54c57b";
	const searchInput = document.getElementById("secondWeatherTitle");
	const searchValue = searchInput.value;
	const secondWeatherTitle = document.getElementById("secondWeatherTitle");
	const dateText = document.getElementById("secondWeatherDate");
	const secondRandomWarmth1 = document.getElementById("secondRandomWarmth1");
	const secondWeatherWarmth = document.getElementById("secondWeatherWarmth");
	const secondWeatherIcon = document.getElementById("secondWeatherIcon");
	const secondRandomWarmth2 = document.getElementById("secondRandomWarmth2");
	const secondCountryImage = document.getElementById("secondCountryImage");

	const searchUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=" + apiKey + "&units=metric";
	fetch (searchUrl)
	.then (response => {
		return response.json();
	}).then(searchResponse => {
		secondWeatherTitle.innerHTML = searchResponse.name;
		dateText.innerHTML = fullDate;
		secondWeatherIcon.setAttribute("src", "http://openweathermap.org/img/w/" + searchResponse.weather[0].icon + ".png");
		if (secondWeatherIcon.classList.contains("hidden")) {
			secondWeatherIcon.classList.remove("hidden");
		}
		secondCountryImage.setAttribute("src", "https://www.countryflags.io/" + searchResponse.sys.country + "/flat/64.png");
		if (secondCountryImage.classList.contains("hidden")) {
			secondCountryImage.classList.remove("hidden");
		}
		secondRandomWarmth1.innerHTML = Math.floor(searchResponse.main.temp - 5) + "°C";
		secondWeatherWarmth.innerHTML = Math.floor(searchResponse.main.temp) + "°C";
		secondRandomWarmth2.innerHTML = Math.floor(searchResponse.main.temp + 5) + "°C";
	})
	.catch(error => {
		secondWeatherTitle.innerHTML = "";
		dateText.innerHTML = "";
		secondWeatherIcon.classList.add("hidden");
		secondCountryImage.setAttribute("src", "");
		secondCountryImage.classList.add("hidden");
		secondRandomWarmth1.innerHTML = "";
		secondWeatherWarmth.innerHTML = "Not found.";
		secondRandomWarmth2.innerHTML = "";
	});
}

function error(error) {
	document.getElementById("body");
	body.innerHTML = "Location must be accessed.";
}

setInterval(updateDate, 1000);
navigator.geolocation.getCurrentPosition(myPosition, error);