var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard");
var easymode=true;
easybutton.classList.toggle("blue");
var hardmode=false;

easybutton.addEventListener("click", function(){
	if(easymode===false){
	easybutton.classList.toggle("blue");
	hardbutton.classList.toggle("blue");
	easymode = !easymode;
	hardmode = !hardmode;
	}
});

hardbutton.addEventListener("click", function(){
	if(hardmode===false){
	easybutton.classList.toggle("blue");
	hardbutton.classList.toggle("blue");
	easymode = !easymode;
	hardmode = !hardmode;
	}
});

var clr=document.querySelectorAll("section div div div");

var R=getRandomInt(256);
var G=getRandomInt(256);
var B=getRandomInt(256);

for(var i=0; i<clr.length; i++){
	var r=getRandomInt(256);
	var g=getRandomInt(256);
	var b=getRandomInt(256);
	clr[i].style.background="rgb(" + r + ", " + g + ", " + b + ")"
	clr[i].addEventListener("click", wrongAnswer)
}

var i=getRandomInt(6);
clr[i].style.background="rgb(" + R + ", " + G + ", " + B + ")"
clr[i].removeEventListener("click", wrongAnswer)
	
clr[i].addEventListener("click", correctAnswer)

var ansvalues=document.querySelectorAll("h1 span");
ansvalues[0].textContent=R;
ansvalues[1].textContent=G;
ansvalues[2].textContent=B;

function getRandomInt(max) {
	return Math.floor(Math.random()*Math.floor(max));
}

function wrongAnswer(){
	alert("WRONG ANSWER");
}

function correctAnswer(){
	alert("WOOHOO!!! CORRECT ANSWER");
}

var newclr=document.querySelector("#newcolors")

newclr.addEventListener("click", function(){
	var R=getRandomInt(256);
	var G=getRandomInt(256);
	var B=getRandomInt(256);

	for(var i=0; i<clr.length; i++){
		clr[i].removeEventListener("click", correctAnswer)
		var r=getRandomInt(256);
		var g=getRandomInt(256);
		var b=getRandomInt(256);
		clr[i].style.background="rgb(" + r + ", " + g + ", " + b + ")"
		clr[i].addEventListener("click", wrongAnswer)
	}

	var i=getRandomInt(6);
	clr[i].style.background="rgb(" + R + ", " + G + ", " + B + ")"
	clr[i].removeEventListener("click", wrongAnswer)	
	clr[i].addEventListener("click", correctAnswer)

	var ansvalues=document.querySelectorAll("h1 span");
	ansvalues[0].textContent=R;
	ansvalues[1].textContent=G;
	ansvalues[2].textContent=B;
})