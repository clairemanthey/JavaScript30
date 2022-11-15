let player = document.querySelector(".player");
let video = document.getElementById("video");
let progress = player.querySelector('.progress');
let progressBar = document.getElementById("progress__filled");
let playToggle = document.getElementById("play-toogle");
let skipButtons = player.querySelectorAll("[data-skip")
let ranges = player.querySelectorAll('.player__slider');


function togglePlay(){
	if(video.paused){
		video.play();
	}else{
		video.pause();
	}
};


function updateButton(){
	let icon = this.paused ? '►' : '❚ ❚';
	playToggle.textContent = icon;
}

function skip(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
	video[this.name] = this.value;
}

function handleProgress(){''
	let percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

playToggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate))
video.addEventListener("timeupdate", handleProgress);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//add another button for full screen
















