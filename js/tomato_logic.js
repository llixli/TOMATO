"use strict";

var widthOfProgressBarOnePart = 0;
var timerId = 0;

function startOfProgram() {
	var numberOfHours = enteringNumberOfWorkingHours();
	document.getElementById("tomatoCounter").innerHTML = 0;
	
	var numberOfTomatoes = numberOfHours * 2;
	document.getElementById("tomatoesNumber").innerHTML = numberOfTomatoes;
	
	calculateWidthOfProgressBarOnePart(numberOfTomatoes);
	
	startOfWorkCircle(25);
}


function enteringNumberOfWorkingHours() {
	var numberOfHours = 0;
	while(true) {
		numberOfHours = prompt('How many hours you want work?', 1);
		if  (numberOfHours >= 1) {
			break;	
		}
		alert('Wrong answer. Please write positive number');
	}
	return numberOfHours;
}


function calculateWidthOfProgressBarOnePart(numberOfTomatoes) {
	widthOfProgressBarOnePart = 100 / numberOfTomatoes;
}


function startOfWorkCircle(minutes) {
	var tomatoCounter = document.getElementById("tomatoCounter").innerHTML;
	var tomatoesNumber = document.getElementById("tomatoesNumber").innerHTML;
	if (tomatoCounter != tomatoesNumber) {
		clearTimeout(timerId);
		startOfWork(minutes);
	}
	else {
		disableRecreationButtons();
		alert("All work is done. Reboot page");
	}
	
}

function startOfWork(minutes) {
	initializationOfTimer(minutes);
	startTimer();
	if (minutes == 25) {
		changeNumberOfTomatoes();
		changeStationOfButtonsAfterWork();
	}
	else {
		changeStatonOfButtonsAfterRecreation();
	}
}


function initializationOfTimer(minutes) {
	var seconds = 0;
	document.getElementById("reverseTimer").innerHTML = minutes + ":" + seconds;
}
 
 
function startTimer(numberOfMinutes) {
	var timeArr = parsingTimerValue();
	var minutes = timeArr[0];
	var seconds = timeArr[1];
	
	if (seconds == 0){
		if (minutes == 0) {
			alert("Time is over.");
			return;
		}
		minutes--;
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		seconds = 59;
	}
	else {
		seconds--;
	}

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.getElementById("reverseTimer").innerHTML = minutes + ":" + seconds;
	timerId = setTimeout(startTimer, 1000);
}


function parsingTimerValue() {
	var reverseTimer = document.getElementById("reverseTimer");
	var time = reverseTimer.innerHTML;
	return time.split(":");
}


function changeNumberOfTomatoes() {
	changeValueOfTomatoCounter();
	//incrementTomatoProgressBar();
}


function changeValueOfTomatoCounter() {
	var tomatoCounter = document.getElementById("tomatoCounter").innerHTML;
	tomatoCounter++;
	document.getElementById("tomatoCounter").innerHTML = tomatoCounter;
}


function changeStationOfButtonsAfterWork() {
	document.getElementById("work").disabled = true;
	if (document.getElementById("tomatoCounter").innerHTML % 8 == 0) {
		document.getElementById("break").disabled = true;
		document.getElementById("rest").disabled = false;
	}
	else {
		document.getElementById("break").disabled = false;
		document.getElementById("rest").disabled = true;
	}
}


function changeStatonOfButtonsAfterRecreation() {
	document.getElementById("work").disabled = false;
	//Writed function "disableRecreationButtons() because in "else" block of startOfWorkCircle() function
	//script make same operation 
	disableRecreationButtons();
}

function disableRecreationButtons() {
	document.getElementById("break").disabled = true;
	document.getElementById("rest").disabled = true;
}



/*
function incrementTomatoProgressBar() {
	var elem = document.getElementById("tomatoBar");
	var currentValueOfTomatoCounter = document.getElementById("tomatoCounter").innerHTML;
	var width  = currentValueOfTomatoCounter * widthOfProgressBarOnePart;
	elem.style.width = width + '%';
}
*/
