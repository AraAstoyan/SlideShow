let images = document.getElementById("images");
let play = document.getElementById("play"),
	stop = document.getElementById("stop"),
	next = document.getElementById("next"),
	back = document.getElementById("back"),
	random= document.getElementById("random"),
	image = document.getElementById("image")

let i = 1;
let img = document.createElement("img");

img.className = "style-img";
img.src = `img/${i}.png`;
image.appendChild(img);

function playNext (){
	
	image.removeChild(img)
	if (i < 5){
		i++;
		img = document.createElement("img");
		img.className = "style-img";
		img.src = `img/${i}.png`;
		image.appendChild(img) ;
		
	}else{
		i = 1;
		img = document.createElement("img");
		img.className = "style-img";
		img.src = `img/${i}.png`;
		image.appendChild(img) ;
	}
		
}

function playBack (){
	
	image.removeChild(img)
	if (i > 1){
		i--;
		img = document.createElement("img");
		img.className = "style-img";
		img.src = `img/${i}.png`;
		image.appendChild(img) ;
		
	}else{
		i = 5;
		img = document.createElement("img");
		img.className = "style-img";
		img.src = `img/${i}.png`;
		image.appendChild(img) ;
	}
		
}

let myInterval;

function playAuto(){
	myInterval = setInterval(playNext,1000);
}

function stopAuto(){
	clearInterval(myInterval);
}


next.addEventListener("click",playNext);
back.addEventListener("click", playBack);
play.addEventListener("click",playAuto);
stop.addEventListener("click",stopAuto);