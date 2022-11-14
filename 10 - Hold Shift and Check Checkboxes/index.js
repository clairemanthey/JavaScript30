let inputs = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

console.log(inputs);

inputs.forEach(input => input.addEventListener("click", selectAllBoxes));

function selectAllBoxes(e){
	let inBetween = false;
	console.log(e);
	if(e.shiftKey && this.checked){
		inputs.forEach(input => {
			console.log(input);
			if(input === this || input === lastChecked){
				inBetween = !inBetween;
			}
			if(inBetween){
				input.checked = true;
			}
		})
	}

	lastChecked = this;
}
