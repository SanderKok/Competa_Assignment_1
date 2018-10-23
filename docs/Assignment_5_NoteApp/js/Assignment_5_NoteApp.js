// Easier to create an element
function createNode(element){
	return document.createElement(element);
}

// Easier to append a child
function append(parent, el) {
	return parent.appendChild(el);
}

let monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

let getDate = new Date();

// Get seperate dates
let year = getDate.getFullYear();
let month = getDate.getMonth();
let day = getDate.getDate();
let hours = getDate.getHours();
let minutes = getDate.getMinutes();

// Set an "0" in front of minutes if it's value is below 10
if (minutes < 10) {
	minutes = "0" + minutes;
}

// So it will display the correct month
month++;

// Set an "0" in front of month if it's value is below 10
if (month < 10) {
	month = "0" + month;
}

// Set an "0" in front of hours if it's value is below 10
if (hours < 10) {
	hours = "0" + hours;
}

// Set an "0" in front of day if it's value is below 10
if (day < 10) {
	day = "0" + day;
}

// Get the year, month and day
let newDate = day + "/" + month + "/" + year;

// Get the hours and minutes
let newTime = hours + ":" + minutes;

// Variable used for creating a note
let createNote;

// Variable used for deleting notes
let delNote;

// Open the add note menu
function openAddMenu() {
	document.getElementById("sideMenu").style.width = "100%";
}

// Closes the add note menu
function closeAddMenu() {
	document.getElementById("sideMenu").style.width = "0";
}

// Displays the notification fields in the add note menu
function displayNotification() {
	if (document.getElementById('notification-checkbox').checked) {
		document.getElementById("notification-yes").style.display = "block";
		document.getElementById("noteNotificationDate").required = true;
		document.getElementById("noteNotificationTime").required = true;
	} else {
		document.getElementById("notification-yes").style.display = "none";
		document.getElementById("noteNotificationDate").required = false;
		document.getElementById("noteNotificationTime").required = false;
	}
}

// Adds a note to all notes
function addNote() {
	const noteTitle = document.getElementById("noteTitle");
	const noteNotificationDate = document.getElementById("noteNotificationDate");
	const noteNotificationTime = document.getElementById("noteNotificationTime");
	
	if (noteTitle !== null) {
		if (noteNotificationDate !== null) {
			createNote++
			
			var oldNotes = JSON.parse(localStorage.getItem('notesArray')) || [];
			
			let noteTitleVal = noteTitle.value;
			let noteNotificationDateVal = noteNotificationDate.value;
			let noteNotificationTimeVal = noteNotificationTime.value;
			
			var newNote = {
				NoteTitle: noteTitleVal,
				NoteNotificationDate: noteNotificationDateVal,
				NoteNotificationTime: noteNotificationTimeVal,
				noteCreation: newDate,
				noteTime: newTime
			};
			
			oldNotes.push(newNote);
			localStorage.setItem('notesArray', JSON.stringify(oldNotes));
		} else {
			// Date is empty
		}
	} else {
		// Title is empty
	}
}

// Loads all notes
function loadNotes() {
	const main = document.getElementsByTagName("main")[0];
	let all = JSON.parse(localStorage.getItem("notesArray"));
	
	if (localStorage.getItem("notesArray") === null) {
		let recover = createNode("h1");
		recover.classList.add("recovery");
		recover.innerHTML = "There are no notes.";
		
		append(main, recover);
	} else {
		for (totalOfNotes = 0; totalOfNotes < all.length; totalOfNotes++) {
		// Create all elements for the note
			let note = createNode("div"),
			h2 = createNode("h2"),
			input = createNode("input"),
			p = createNode("p");
			let innerNote = createNode("div"),
			editIcon = createNode("i"),
			innerP = createNode("p"),
			i = createNode("i");
			let br = createNode("br");
			
		// Add attributes to the elements created above
			note.classList.add("note");
			note.id = "note" + [totalOfNotes];
			h2.classList.add("title");
			editIcon.classList.add("material-icons");
			input.setAttribute("type", "checkbox");
			input.classList.add("checkbox");
			input.value = [totalOfNotes];
			input.id = "checkbox" + [totalOfNotes];
			input.addEventListener("click", () => {
				check()
			});
			p.classList.add("date");
			innerNote.classList.add("notification-area");
			editIcon.classList.add("editIcon");
			editIcon.classList.add("hidden");
			editIcon.id = "icon" + [totalOfNotes];
			editIcon.setAttribute("title", "Edit note" + " " + [totalOfNotes]);
			editIcon.addEventListener("click", () => {
				editNote()
			});
			innerP.classList.add("notification");
			i.classList.add("material-icons");
			i.classList.add("icon");
		
		// Set text inside of the elements created
			h2.innerHTML = all[totalOfNotes].NoteTitle;
			editIcon.innerHTML = "edit";
			p.innerHTML = all[totalOfNotes].noteCreation + " " + all[totalOfNotes].noteTime;
			
		// Depends on if notification is enabled
			if (all[totalOfNotes].NoteNotificationDate == "") {
				innerP.innerHTML = "Notification disabled";
			} else {
				innerP.innerHTML = all[totalOfNotes].NoteNotificationDate + " " + all[totalOfNotes].NoteNotificationTime;
				i.innerHTML = "notifications";
			}
			
		// Append everything to display correctly
			append(main, note);
			append(note, h2);
			append(note, input);
			append(note, p);
			append(note, innerNote);
			append(innerNote, editIcon);
			append(innerNote, innerP);
			append(innerP, i);
		}
	}
}

// Refreshes the page
function refreshPage() {
	window.location.reload();
}

// Shows and hides the SETTINGS MENU
function settingsMenu() {
	var checkboxCount;
	const checkbox = document.getElementsByClassName("checkbox");
	const editIcoon = document.getElementsByClassName("editIcon");
	const ul = document.getElementById("settingsMenu");
	const i = document.getElementById("removeIcon");
	
	if (localStorage.getItem("notesArray") !== null) {
		if (document.getElementById('settingsMenu').style.display == "none") {
			ul.style.display = "block";
			for (checkboxCount = 0; checkboxCount < totalOfNotes; checkboxCount++) {
				checkbox[checkboxCount].style.display = "block";
				editIcoon[checkboxCount].classList.remove("hidden");
			}
		} else {
			checkboxCount = 0;
			ul.style.display = "none";
			for (checkboxCount = 0; checkboxCount < totalOfNotes; checkboxCount++) {
				checkbox[checkboxCount].style.display = "none";
				editIcoon[checkboxCount].classList.add("hidden");
			}
		}
	} else {
		// Won't open the settings menu
	}
}

// Checks every checkbox
function checkAll() {
	const checkIcon = document.getElementById("checkIcon");
	const del = document.getElementById("deleteList");
	const sel = document.getElementById("selectList");
	let amountOfCheckboxes = 0;
	amountOfCheckboxes - 1;
	
	if (document.getElementsByClassName("checkbox")[amountOfCheckboxes].checked) {
		for (amountOfCheckboxes; amountOfCheckboxes < totalOfNotes; amountOfCheckboxes++) {
			document.getElementsByClassName("checkbox")[amountOfCheckboxes].checked = false;
			checkIcon.innerHTML = "check_box_outline_blank";
			del.innerHTML = "Delete selected";
			sel.innerHTML = "Select all";
		}
	} else {
		for (amountOfCheckboxes; amountOfCheckboxes < totalOfNotes; amountOfCheckboxes++) {
			document.getElementsByClassName("checkbox")[amountOfCheckboxes].checked = true;
			checkIcon.innerHTML = "check_box";
			del.innerHTML = "Delete all";
			sel.innerHTML = "Deselect all";
		}
	}
}

// Checks a single checkbox
function check() {
	let checkboxAmount = 0;
	const checkboxes = document.querySelectorAll(".checkbox");
	checkboxes.forEach(box => {
		if(!box.checked)
			return;
		else {
			checkboxAmount++;
		}
	})
	if(checkboxAmount == checkboxes.length) {
		document.getElementById("checkIcon").innerHTML = "check_box";
		document.getElementById("deleteList").innerHTML = "Delete all";
		document.getElementById("selectList").innerHTML = "Deselect all";
	} else {
		document.getElementById("checkIcon").innerHTML = "check_box_outline_blank";
		document.getElementById("deleteList").innerHTML = "Delete selected";
		document.getElementById("selectList").innerHTML = "Select all";
	}
}

// Deletes all selected notes
function deleteNote() {
	var allItems = JSON.parse(localStorage.getItem("notesArray"));
	let cBoxAmount = 0;
	const allCheckboxes = document.querySelectorAll(".checkbox");
	allCheckboxes.forEach(cBox => {
		if(!cBox.checked) {
			return;
		} else {
			cBoxAmount++;
		}
	});
	if (cBoxAmount == allCheckboxes.length) {
		// If every checkbox is checked
		localStorage.clear();
		refreshPage();
	} else {
		// If not every checkbox is checked
		if (cBoxAmount !== allCheckboxes.length) {
			for (let selectedNoteIndex = 0; selectedNoteIndex < allCheckboxes.length; selectedNoteIndex++) {
				let chCBox = document.getElementById("checkbox" + selectedNoteIndex);
				if (chCBox.checked === true) {
					console.log("Checked: " + chCBox.id); // Will give the checked checkboxes
					var lmao = JSON.parse(localStorage.getItem('notesArray'));
					var tering = lmao.splice(selectedNoteIndex, 1);
					localStorage.setItem('notesArray', JSON.stringify(lmao));
					refreshPage();
				} else {
					console.log("Not checked: " + chCBox.id);
				}
			}
		}
	}
}

// Sorts all notes
function sort() {
	const sortOn = document.getElementById("sortOn");
	const sortedOnDate = document.getElementById("sortDate");
	const sortedOnName = document.getElementById("sortName");
	
	if (sortOn.selectedIndex === 0) {
		sortOnName();
	} else if (sortOn.selectedIndex === 2) {
		sortOnDate();
	} else if (sortOn.selectedIndex === 3) {
		sortOnName();
	}
}

// Sort notes on name, also add date with title so it does not get messed up :)
function sortOnName() {
	let allNotes = JSON.parse(localStorage.getItem('notesArray'));
	allNotes.sort(function(a, b){
		return a.NoteTitle > b.NoteTitle;
	});
	
	for (let sortIndex = 0; sortIndex < totalOfNotes; sortIndex++) {
		let titles = document.getElementsByClassName("title")[sortIndex];
		let titlesOnDate = document.getElementsByClassName("date")[sortIndex];
		titles.innerHTML = allNotes[sortIndex]['NoteTitle'];
		titlesOnDate.innerHTML = allNotes[sortIndex]['noteCreation'] + " " + allNotes[sortIndex]['noteTime'];
	}
}

// Sort notes on date
function sortOnDate() {
	let allNotesOnDate = JSON.parse(localStorage.getItem('notesArray'));
	allNotesOnDate.sort(function(a, b){
		return a.creationDate > b.creationDate;
	});
	for (let dateSortIndex = 0; dateSortIndex < totalOfNotes; dateSortIndex++) {
		let dateText = document.getElementsByClassName("date")[dateSortIndex];
		let dateTitle = document.getElementsByClassName("title")[dateSortIndex];
		dateText.innerHTML = allNotesOnDate[dateSortIndex]['noteCreation'] + " " + allNotesOnDate[dateSortIndex]['noteTime'];
		dateTitle.innerHTML = allNotesOnDate[dateSortIndex]['NoteTitle'];
	}
}

// Edits the note
function editNote() {
	let editNoteIndex = 0;
	editNoteIndex - 1;
	for (editNoteIndex; editNoteIndex < totalOfNotes; editNoteIndex++) {
		let clickedNote = document.querySelector("#note" + [editNoteIndex]).id;
		let clickedIcon = document.querySelector("#icon" + [editNoteIndex]).id;
		if (clickedIcon == event.target.id) {
			// If icon ID is the same as the target ID
//			console.log(event.target.id);
		} else {
			// If icon ID is not the same as the target ID
//			clickedIcon.style.display = "none";
		}
	}
}

// Starts the function at end of file load
loadNotes();