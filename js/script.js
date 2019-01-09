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
// Most of this is all Dave Rupert
// See https://codepen.io/davatron5000/pen/uqktG

(function(){
  $(".play-pause").click(function() {

   if($(this).hasClass('pausing')){
      $(this).removeClass('pausing');
      $(this).addClass('playing');
      $(this).css("background-image", "url(https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif)");
      audio.play();
  }
  else if($(this).hasClass('playing')){
      $(this).removeClass('playing');
      $(this).addClass('pausing');
      $(this).css("background-image", "url(https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif)");
      audio.pause();
  }
  else {
    $(this).addClass('playing');
    $(this).css("background-image", "url(https://media.giphy.com/media/3oEhmM10mIi1dkMfmg/giphy.gif)");
    audio.play();
  }

});



  var pcastPlayers = document.querySelectorAll('.player-container');
  var speeds = [ 1, 1.5, 2, 2.5, 3, 0.5 ]

  for(i=0;i<pcastPlayers.length;i++) {
    var player = pcastPlayers[i];
    var audio = player.querySelector('audio');/*
    var play = player.querySelector('.play-pause.playing');
    var pause = player.querySelector('.play-pause.pausing');*/



    var progress = player.querySelector('.pcast-progress');

    var currentTime = player.querySelector('.pcast-currenttime');

    var currentSpeedIdx = 0;


    var toHHMMSS = function ( totalsecs ) {
        var sec_num = parseInt(totalsecs, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours; }
        if (minutes < 10) {minutes = ""+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}

        var time = hours+':'+minutes+':'+seconds;
        if (hours   <= 1) { var time = minutes+':'+seconds; }

        return time;
    }

  }
})(this);
