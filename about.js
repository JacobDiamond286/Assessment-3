console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!")
}

function compliment(evt) {
	alert("You are awesome!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img')

img.addEventListener(`mouseover`, compliment)