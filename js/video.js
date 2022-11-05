var video;

window.addEventListener("load", function () {
	video = document.querySelector("video");
	video.setAttribute("autoplay", "false")
	video.setAttribute("looping", "false")

});
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var slower = document.getElementById("slower");
var faster = document.getElementById("faster");
var skip = document.getElementById("skip");
var mute = document.getElementById("mute");
var styled = document.getElementById("vintage");
var original = document.getElementById("orig");
var slider = document.getElementById("slider");
play.onclick = function () {
	video.play();
	document.getElementById("volume").innerHTML = slider.value;
};

pause.onclick = function () {
	video.pause();
};

slower.onclick = function () {
	video.playbackRate = video.playbackRate * .9;
	console.log(video.playbackRate);
};

faster.onclick = function () {
	video.playbackRate = video.playbackRate * 1/.9;
	console.log(video.playbackRate);
};

skip.onclick = function () {
	if (video.currentTime + 10 <= video.duration) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
};

mute.onclick = function () {
	if (mute.innerHTML == "Mute") {
		video.muted = true;
		mute.innerHTML = "Unmute";
	} else {
		video.muted = false;
		mute.innerHTML = "Mute";
	}
};

slider.onchange = function () {
	video.volume = slider.value / 100;
	document.getElementById("volume").innerHTML = slider.value;
}

styled.onclick = function () {
	video.classList.add("oldSchool");
}

original.onclick = function () {
	video.classList.remove("oldSchool");
}


