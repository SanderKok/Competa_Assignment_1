const lastMonthBtn = document.querySelector('.last-month');
const nextMonthBtn = document.querySelector('.next-month');
const table  = document.querySelector('.table__body');

let a = 0;
let date = new Date();

const eventsAdd = document.getElementById("event-adding");

const yaya = new Date();
popop = yaya.getFullYear();

const dayNumbers = [];
for(i=0; i < 31; i++) {
	dayNumbers.push(i);
}

let g;

let today = date.getDate();
console.log(today);

// Get and display year
let fullYear = parseInt(date.getFullYear());
document.getElementById("title__year").innerHTML = fullYear;

lastMonthBtn.addEventListener('click', prevMonth);
nextMonthBtn.addEventListener('click', nextMonth);

// Get and display month
const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const currentMonth = parseInt(date.getMonth());
let monthIndex = parseInt(date.getMonth());
let fullMonth = monthNames[monthIndex];
document.getElementById("title__month").innerHTML = fullMonth;

// Substract 1 from month
function prevMonth() {
	a = 0;
	table.innerHTML = '';
	
	if(monthIndex < 1) {
		monthIndex = (monthNames.length - 1);
		fullYear--;
		prevMonth = monthNames[monthIndex];
		document.getElementById("title__month").innerHTML = prevMonth;
		document.getElementById("title__year").innerHTML = fullYear;
		addDays(prevMonth, fullYear);
	} else {
		monthIndex--;
		prevMonth = monthNames[monthIndex];
		document.getElementById("title__month").innerHTML = prevMonth;
		addDays(prevMonth, fullYear);
	}
}

// Add 1 to month
function nextMonth() {
	a = 0;
	table.innerHTML = '';
	
	if(monthIndex > monthNames.length - 2) {
		monthIndex = 0;
		fullYear++;
		nextMonth = monthNames[monthIndex];
		document.getElementById("title__month").innerHTML = nextMonth;
		document.getElementById("title__year").innerHTML = fullYear;
		addDays(nextMonth, fullYear);
	} else {
		monthIndex++;
		nextMonth = monthNames[monthIndex];
		document.getElementById("title__month").innerHTML = nextMonth;
		addDays(nextMonth, fullYear);
	}
	
}

// Substract 1 from year
function lastYear() {
	let prevYear = fullYear--;
	document.getElementById("title__year").innerHTML = prevYear;
}

// Add 1 to year
function nextYear() {
	let nextYear = fullYear++;
	document.getElementById("title__year").innerHTML = nextYear;
}

function addDays(month, year) {
	console.log(year);
	let index = monthNames.indexOf(month);
	//odd
	if(index % 2 === 1) {
		let days = 31;
		//rows
		for(i = 0; i < 5; i++) {
			table.insertAdjacentHTML('beforeend', '<tr class="table__row">');
			//Columns
			for(j = 0; j < 7;  j++) {
				const row = document.querySelectorAll('.table__row')[i];
				row.insertAdjacentHTML('beforeend', `<td class="days" id="day${a + 1}"></td>`);
				row.setAttribute("id", a);
				row.addEventListener('click', displayEventsAdd, this);
				a++;
				if(a == 31) {
					FillInColumns(index, year);
				}
			}
		}
	}
	//even
	if(index % 2 === 0) {
		let days = 30;
		//rows
		for(i = 0; i < 5; i++) {
			table.insertAdjacentHTML('beforeend', '<tr class="table__row">');
			//Columns
			for(j = 0; j < 7;  j++) {
				const row = document.querySelectorAll('.table__row')[i];
				row.insertAdjacentHTML('beforeend', `<td class="days" id="day${a + 1}"></td>`);
				row.addEventListener('click', displayEventsAdd, this);
				a++;
				if(a == 30) {
					FillInColumns(index, year);
				}
			}
		}
	}
}

function FillInColumns(index, year) {
	let amount = index % 2 === 0 ? 30 : 31;
	if(index == 1)
	amount = 28;

	for(c=0; c < amount; c++) {
		const columns = document.querySelectorAll('.days');
		columns[c].innerHTML = `${c + 1}`;
	}
	const currentDayElm = document.querySelectorAll('.days');
	let yearOnCalendar = getYearOnCalendar();
	console.log("lol "+yearOnCalendar);
	
	let newYearForCalendar = new Date();
	let years = newYearForCalendar.getFullYear();
	
	if(index == currentMonth) {
		if (fullYear == popop) {
			currentDayElm[today-1].classList.add("active");
			currentDayElm[today-1].addEventListener("click", () => {
				eventsAdd.style.display = "block";
			});
		}
	}
	else {
		// console.log(year, fullYear);
	}
}

function getYearOnCalendar() {
	let currentYearOnCalendar = document.getElementById("title__year").innerHTML;
	return currentYearOnCalendar;
}

function eventsAddForm() {
	let addsEvent = document.getElementById("add-event");
	addsEvent.style.display = "block";
	document.getElementById("dateOfEventSpan").innerHTML = "== DATE HERE ==";
}

function displayEventsAdd(id) {
	eventsAdd.style.display = "block";
}

getYearOnCalendar();
addDays("September", fullYear);