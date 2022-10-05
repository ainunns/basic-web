function responsiveNavbar() {
	let x = document.getElementById("myWrapper");
	if(x.className === "wrapper") {
		x.className += " responsive";
	} else {
		x.className = "wrapper";
	}
}

function init() {
	for (let i = 0; i < 3; i++) {
			document.querySelector(".notes"+i.toString()+"-is").style.display = "none";
	}
}

init();

let indexRead = '4';

function readNotes(index, noteType) {
	let judul = document.querySelector(".notesTitle"+index.toString()+"-"+noteType.toString());
	let baca = document.querySelector(".IamReading-"+noteType.toString());
	if(indexRead !== '4' || indexRead === index) {
		document.querySelector(".notes"+indexRead.toString()+"-"+noteType.toString()).style.display = "none";
	}
	if(index === indexRead){
		baca.innerHTML = "You're not reading anything";
		indexRead = '4';
		return;
	}
	baca.innerHTML = "Now, you're reading "+judul.innerHTML.toString();
	document.querySelector(".notes"+index.toString()+"-"+noteType.toString()).style.display = "block";
	indexRead = index;
}