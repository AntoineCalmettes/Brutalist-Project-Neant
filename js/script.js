
var textHolder = document.getElementsByTagName('div')[16],
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

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
   if(!isChrome){
     $('#iframeAudio').remove()
   }
 else{
    $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background
 }
