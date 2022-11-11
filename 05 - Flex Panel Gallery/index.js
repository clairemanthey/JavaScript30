const panels = document.querySelectorAll('.panel');

//toggle between open and closed
//open if closed and close if opened

function open(){
	this.classList.toggle("open")
	console.log("open")
}

function active(e){
      if (e.propertyName.includes('flex')) {
		this.classList.toggle("display");
	}

}

panels.forEach(panel => panel.addEventListener("click", open));
panels.forEach(panel => panel.addEventListener("transitionend", active));

