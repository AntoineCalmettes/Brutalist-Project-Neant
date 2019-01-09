var textHolder = document.getElementsByTagName('h1')[0],
  text = textHolder.innerHTML,
	chars = text.length,
	newText = '',
	i;

for (i = 0; i < chars; i += 1) {
	newText += '<i>' + text.charAt(i) + '</i>';
}

textHolder.innerHTML = newText;

var letters = document.getElementsByTagName('i'),
	flickers = [5, 7, 9, 11, 13, 15, 17],
	randomLetter,
	flickerNumber,
	counter;

function randomFromInterval(from,to) {
	return Math.floor(Math.random()*(to-from+1)+from);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function flicker() {
	counter += 1;

	if (counter === flickerNumber) {
		return;
	}

	setTimeout(function () {
		if(hasClass(randomLetter, 'off')) {
			randomLetter.className = '';
		}
		else {
			randomLetter.className = 'off';
		}

		flicker();
	}, 30);
}

(function loop() {
    var rand = randomFromInterval(500,3000);

	randomLetter = randomFromInterval(0, 3);
	randomLetter = letters[randomLetter];

	flickerNumber = randomFromInterval(0, 6);
	flickerNumber = flickers[flickerNumber];

    setTimeout(function() {
            counter = 0;
            flicker();
            loop();
    }, rand);
}());

// ----------------------------------------------------------------------------------
// let stockLink = document.getElementsByClassName("lol");
//
// function mouveBackground(link){
//   link[0].style.background = "linear-gradient(to bottom, #00FDFF 0%, #FE00FF 100%)";
//   link[1].style.background = "linear-gradient(to bottom, #00FDFF 0%, #FE00FF 100%)";
//   setTimeout(mouveBackground(link),1100)
// }
// function mouveBackground2(link){
//   link[0].style.background = "linear-gradient(to bottom, #FE00FF 0%, #00FDFF 100%)";
//   link[1].style.background = "linear-gradient(to bottom, #FE00FF 0%, #00FDFF 100%)";
//   setTimeout(mouveBackground2(link),500)
// }
// mouveBackground(stockLink);
// mouveBackground2(stockLink);
