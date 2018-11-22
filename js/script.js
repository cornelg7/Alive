var scrollableElement = document.getElementsByTagName("BODY")[0]; // body
var lastTimeMs = (new Date()).getTime(); // previous scroll time
var waitTimeMs = 2000; // waiting time between scrolls
var verse = 0; // current verse
var muted = 0;
var toMute;

scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

//detect m for mute
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  if (keyName == 'm') {
	  muted = 1 - muted;
	  if (muted == 0) { playSound(); }
	  else { clearTimeout(toMute); }
  }
});

//detect arrows
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') { // up
		tryMove(-1);
    } else if (e.keyCode == '40') { // down
		tryMove(1);
    } else if (e.keyCode == '37') { // left
		tryMove(-1);
    } else if (e.keyCode == '39') { // right
		tryMove(1);
    } else if (e.keyCode == '32'){ // space
        tryMove(1);
    }
}

//detect click
document.onclick = function(event) {
    tryMove(1);
};

function tryMove(dir) { // dir > 0 down
	var timeMs = (new Date()).getTime();
	if (timeMs - lastTimeMs > waitTimeMs) {
		lastTimeMs = timeMs;
		movePage(dir);
	}
}

playSound();
function playSound() {
    soundToPlay = Math.floor(Math.random()*7) + 1;
	var audio = new Audio("res/sound/" + soundToPlay + ".wav");
	audio.play();
	if (muted == 0) {
		toMute = setTimeout(playSound, Math.floor(Math.random()*5000) + 5000);
	}
}

/*finding scroll direction - stackoverflow, Vasi*/
function findScrollDirectionOtherBrowsers(event){
	var delta;

	if (event.wheelDelta){
		delta = event.wheelDelta;
	}else{
		delta = -1 * event.deltaY;
	}

	if (delta < 0){ // down
		tryMove(1);
	}else if (delta > 0){ // up
		tryMove(-1);
	}
}

function movePage(direction) {
	if (direction > 0) {
		//console.log("pged moved DOWn");
		if (verse == 19) { // the end.
			//verse = 0;
			//modifyElements();
			muted = 1;
		}
		else {
			verse = verse + 1;
			modifyElements();
		}
	}
	else {
		//console.log("pged moved UP");
		if (verse == 0) { // todo easter egg
			//console.log("first page");
		}
		else {
			verse = verse - 1;
			modifyElements();
		}
	}
}

function clearVerseElements(obj) {
  //obj.style.display = "none";
  obj.style.opacity = "0.0";
}

function modifyElements() {
	// get elements
	var devourerElem = document.getElementById("devourer");
	var mistElem = document.getElementById("mist");
	var verseElems = document.querySelectorAll("#verse0,#verse1,#verse2,#verse3,#verse4,#verse5,#verse6,#verse7,#verse8,#verse9,#verse10,#verse11,#verse12,#verse13,#verse14,#verse15,#verse16,#verse17,#verse18,#verse19");
	if (verse == 0) {
		devourerElem.style.opacity = "0.0";
		devourerElem.style.top = "62%";
		devourerElem.style.height = "17.82vw";
		devourerElem.style.width = "11vw";
		mistElem.style.opacity = "1.0";
		verseElems.forEach(clearVerseElements);
		verseElems[0].style.opacity = "1.0"; // verseElems[0].style.display="block";
		
	} else if (verse == 1) {
		devourerElem.style.opacity = "0.3";
		devourerElem.style.top = "62%";
		devourerElem.style.height = "17.82vw";
		devourerElem.style.width = "11vw";
		mistElem.style.opacity = "1.0";
		verseElems.forEach(clearVerseElements);
		verseElems[1].style.opacity = "1.0"; // verseElems[1].style.display="block";
		
	} else if (verse == 2) {
		devourerElem.style.opacity = "0.4";
		devourerElem.style.top = "62.5%";
		devourerElem.style.height = "18.63vw";
		devourerElem.style.width = "11.5vw";
		mistElem.style.opacity = "0.95";
		verseElems.forEach(clearVerseElements);
		verseElems[2].style.opacity = "1.0"; // verseElems[2].style.display="block";
		
	} else if (verse == 3) {
		devourerElem.style.opacity = "0.5";
		devourerElem.style.top = "63%";
		devourerElem.style.height = "19.44vw";
		devourerElem.style.width = "12vw";
		mistElem.style.opacity = "0.9";
		verseElems.forEach(clearVerseElements);
		verseElems[3].style.opacity = "1.0"; // verseElems[3].style.display="block";
		
	} else if (verse == 4) {
		devourerElem.style.opacity = "0.7";
		devourerElem.style.top = "64%";
		devourerElem.style.height = "21.06vw";
		devourerElem.style.width = "13vw";
		mistElem.style.opacity = "0.7";
		verseElems.forEach(clearVerseElements);
		verseElems[4].style.opacity = "1.0"; // verseElems[4].style.display="block";
		
	} else if (verse == 5) {
		devourerElem.style.opacity = "0.9";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.5";
		verseElems.forEach(clearVerseElements);
		verseElems[5].style.opacity = "1.0"; // verseElems[5].style.display="block";
		
	} else if (verse == 6) {
		devourerElem.style.opacity = "0.0";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "1.0";
		verseElems.forEach(clearVerseElements);
		verseElems[6].style.opacity = "1.0"; // verseElems[6].style.display="block";
		
	} else if (verse == 7) {
		devourerElem.style.opacity = "0.3";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "1.0";
		verseElems.forEach(clearVerseElements);
		verseElems[7].style.opacity = "1.0"; // verseElems[7].style.display="block";
		
	} else if (verse == 8) {
		devourerElem.style.opacity = "0.4";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "11.5vw";
		mistElem.style.opacity = "0.95";
		verseElems.forEach(clearVerseElements);
		verseElems[8].style.opacity = "1.0"; // verseElems[8].style.display="block";
		
	} else if (verse == 9) {
		devourerElem.style.opacity = "0.5";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.9";
		verseElems.forEach(clearVerseElements);
		verseElems[9].style.opacity = "1.0"; // verseElems[9].style.display="block";
		
	} else if (verse == 10) {
		devourerElem.style.opacity = "0.7";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.7";
		verseElems.forEach(clearVerseElements);
		verseElems[10].style.opacity = "1.0"; // verseElems[10].style.display="block";
		
	} else if (verse == 11) {
		devourerElem.style.opacity = "0.9";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.5";
		verseElems.forEach(clearVerseElements);
		verseElems[11].style.opacity = "1.0"; // verseElems[11].style.display="block";
		
	}else if (verse == 12) {
		devourerElem.style.opacity = "0.9";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.5";
		verseElems.forEach(clearVerseElements);
		verseElems[12].style.opacity = "1.0"; // verseElems[12].style.display="block";
		
	} else if (verse == 13) {
		devourerElem.style.opacity = "0.8";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.5";
		verseElems.forEach(clearVerseElements);
		verseElems[13].style.opacity = "1.0"; // verseElems[13].style.display="block";
		
	} else if (verse == 14) {
		devourerElem.style.opacity = "0.7";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.4";
		verseElems.forEach(clearVerseElements);
		verseElems[14].style.opacity = "1.0"; // verseElems[14].style.display="block";
		
	} else if (verse == 15) {
		devourerElem.style.opacity = "0.5";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.3";
		verseElems.forEach(clearVerseElements);
		verseElems[15].style.opacity = "1.0"; // verseElems[15].style.display="block";
		
	} else if (verse == 16) {
		devourerElem.style.opacity = "0.3";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.2";
		verseElems.forEach(clearVerseElements);
		verseElems[16].style.opacity = "1.0"; // verseElems[16].style.display="block";
		
	} else if (verse == 17) {
		devourerElem.style.opacity = "0.1";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.1";
		verseElems.forEach(clearVerseElements);
		verseElems[17].style.opacity = "1.0"; // verseElems[17].style.display="block";
		
	} else if (verse == 18) {
		devourerElem.style.opacity = "0.0";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.0";
		verseElems.forEach(clearVerseElements);
		verseElems[18].style.opacity = "1.0"; // verseElems[18].style.display="block";
		
	} else if (verse == 19) {
		devourerElem.style.opacity = "0.0";
		devourerElem.style.top = "65%";
		devourerElem.style.height = "22.08vw";
		devourerElem.style.width = "14vw";
		mistElem.style.opacity = "0.0";
		verseElems.forEach(clearVerseElements);
		verseElems[19].style.opacity = "1.0"; // verseElems[19].style.display="block";
		
	}
	
}

