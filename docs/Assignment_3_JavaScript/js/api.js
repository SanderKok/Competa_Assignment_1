function createNode(element){
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('user-picture');
const url = 'https://randomuser.me/api/?nationality=nl&results=20';

fetch(url)
.then((response) => response.json())
.then(function(data) {
	let authors = data.results;
	return authors.map(function(author) {
		var idCounter = 0;
		const idText = "imageId-";
		var i;
		for (i = 0; i < idCounter.length; i++) {
			console.log(i);
		}
		let li = createNode('li'),
		img = createNode('img'),
		span = createNode('span');
		img.src = author.picture.large;
		span.innerHTML = `${author.name.first} ${author.name.last}`;
		li.classList.add("profile-list");
		span.classList.add("profile-name");
		img.classList.add("profile-picture");
		img.setAttribute("id", "lol")
		img.addEventListener("click", ()=> {
			img.classList.remove("profile-picture");
			img.classList.add("profile-clicked");
		})
		img.onclick = clicked;
		append(li, img);
		append(li, span);
		append(ul, li);
		
		console.log("User loaded.");
	})
})