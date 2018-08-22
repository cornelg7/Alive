var scrollableElement = document.getElementsByTagName("BODY")[0]; // body
var lastTimeMs = (new Date()).getTime(); // previous scroll time
var waitTimeMs = 1000; // waiting time between scrolls
var verse = 0; // current verse
var currentPart = 1; // part 2: reveal hidden messages

scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

/*finding scroll direction - stackoverflow, Vasi*/
function findScrollDirectionOtherBrowsers(event){
	var delta;

	if (event.wheelDelta){
		delta = event.wheelDelta;
	}else{
		delta = -1 * event.deltaY;
	}

	if (delta < 0){
		var timeMs = (new Date()).getTime();
		if (timeMs - lastTimeMs > waitTimeMs) {
			lastTimeMs = timeMs;
			movePage(1);
		}
	}else if (delta > 0){
		var timeMs = (new Date()).getTime();
		if (timeMs - lastTimeMs > waitTimeMs) {
			lastTimeMs = timeMs;
			movePage(-1);
		}
	}
}

function movePage(direction) {
	if (direction > 0) {
		//console.log("pged moved DOWn");
		if (verse == 5) {
			console.log("final page - to do PART2");
			currentPart = 2;
		}
		else {
			verse = verse + 1;
			modifyElements();
		}
	}
	else {
		//console.log("pged moved UP");
		if (verse == 0) {
			console.log("first page - todo can you scroll up?");
		}
		else {
			verse = verse - 1;
			modifyElements();
		}
	}
}

function modifyElements() {
	console.log("currently at verse " + verse);
	// get elements
	var devourerElem = document.getElementsByClassName("devourer")[0];
	var mistElem = document.getElementsByClassName("mist")[0];
	// get writings to do
	if (currentPart == 1) {
		if (verse == 0) {
			devourerElem.style.opacity = "0.0";
			devourerElem.style.top = "62%";
			devourerElem.style.height = "17.82vw";
			devourerElem.style.width = "11vw";
			mistElem.style.opacity = "1.0";
			
		} else if (verse == 1) {
			devourerElem.style.opacity = "0.3";
			devourerElem.style.top = "62%";
			devourerElem.style.height = "17.82vw";
			devourerElem.style.width = "11vw";
			mistElem.style.opacity = "1.0";
			
		} else if (verse == 2) {
			devourerElem.style.opacity = "0.4";
			devourerElem.style.top = "62.5%";
			devourerElem.style.height = "18.63vw";
			devourerElem.style.width = "11.5vw";
			mistElem.style.opacity = "0.95";
			
		} else if (verse == 3) {
			devourerElem.style.opacity = "0.5";
			devourerElem.style.top = "63%";
			devourerElem.style.height = "19.44vw";
			devourerElem.style.width = "12vw";
			mistElem.style.opacity = "0.9";
			
		} else if (verse == 4) {
			devourerElem.style.opacity = "0.7";
			devourerElem.style.top = "64%";
			devourerElem.style.height = "21.06vw";
			devourerElem.style.width = "13vw";
			mistElem.style.opacity = "0.7";
			
		} else if (verse == 5) {
			devourerElem.style.opacity = "0.9";
			devourerElem.style.top = "65%";
			devourerElem.style.height = "22.08vw";
			devourerElem.style.width = "14vw";
			mistElem.style.opacity = "0.5";
			
		}
	}
	else {
		console.log("part2 todo");
	}
}

