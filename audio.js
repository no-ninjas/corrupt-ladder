
var extension = ".ogg";

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari')!=-1){ 
	if(ua.indexOf('chrome')  > -1){
		//its chrome
	}else{
		//its safari
		extension = ".mp3";
	}
}

var audio = [];


function loadAudio() {
	audio[0] = new Audio();
	audio[0].addEventListener('canplaythrough', audioLoaded, false);
	audio[0].loop = true;
	audio[0].src = 'audio/02_un_-_the_tempest'+extension;
	
	audio[1] = new Audio();
	audio[1].addEventListener('canplaythrough', audioLoaded, false);
	audio[1].loop = true;
	audio[1].src = 'audio/06_seetyca_-_verlosche_mich'+extension;
}


var activeaudio = null;
var loadedaudio = 0;
var timeout;

// good idea to preload, except it takes too long to start playing
function audioLoaded() {
	//loadedaudio++;
	//if (loadedaudio == audio.length) init(); //doneLoadingAudio();
}


function playAudio(id) {

	var prev = activeaudio;
	activeaudio = id;
	audio[activeaudio].volume = 0.0;
	audio[activeaudio].play();
	
	if (timeout) {
		clearTimeout(timeout);
	}
	
	function doFade() {
		timeout = setTimeout( function() {
			
			var ready = 0;
			var target = 1.0;
			
			if (audio[activeaudio]._volume) target = audio[activeaudio]._volume;
			
			if ( audio[activeaudio].volume < target ) {
				var vol = audio[activeaudio].volume + 0.05;
				if (vol >= target ) audio[activeaudio].volume = target;
				 else audio[activeaudio].volume = vol;
			} else {
				ready++;
			}
			
			for (i=0; i< audio.length; i++) {
				if (i !== activeaudio) {
					if ( audio[i].volume > 0.0 ) {
						vol = audio[i].volume - 0.05;
						if (vol < 0.0 ) audio[i].volume = 0.0;
						 else audio[i].volume = vol;
					} else {
						//console.log(i + " ready");
						ready++;
						audio[i].pause();
					}
				}
			}

			//console.log(activeaudio + " " + audio.length + " " + ready + " " + audio[activeaudio].volume + " " + target);
			
			if (ready == audio.length) {
				//if (prev) audio[prev].pause();
				//console.log("finished crossfade");
			} else {
				doFade();
			}
		}, 180 );
	}
	
	doFade();
}
