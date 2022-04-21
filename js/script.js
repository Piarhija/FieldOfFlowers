//Author: Piaa
var images = [
	'1.png',
	'2.png',
	'3.png',
	'4.png',
	'5.png',
	'6.png',
	'7.png',
];
var length = images.length;
var postavitev = 30;

for (let i = 0; i < 600; i++) {
	var rand = Math.floor(length*Math.random());
	var randf = Math.floor(postavitev*Math.random());
	var fotka = 0 + i 
		var img = document.createElement('img');
		img.id = "target" + fotka;
		img.style = "margin:-" + randf + "px; opacity: 90%; width:70px;"
		//img.style = "margin:-" + randf + "px; opacity: 90%; width:" + randf * 5 + "px;"
		document.body.appendChild(img);
	  	document.getElementById("target" + fotka).src="images/" + images[rand];
}

