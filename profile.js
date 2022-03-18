console.log("Connected")

function color(evt) {
	alert("My Favorite color is ORANGE!")
}

function place(evt) {
	alert("My Favorite place is NEW ZEALAND!")
}

function ritual(evt) {
	alert("My Favorite ritual is MY PREGAME RITUAL")
}

let colorBtn = document.querySelector("#color") 
let placeBtn = document.querySelector("#place") 
let ritualBtn = document.querySelector("#ritual") 

colorBtn.addEventListener(`click`, color)
placeBtn.addEventListener(`click`, place)
ritualBtn.addEventListener(`click`, ritual)