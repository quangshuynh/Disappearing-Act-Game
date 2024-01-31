$(document).ready(function(){
  var viewport_height = $(window).height();
  var viewport_width= $(window).width();

  var circle_percentage_h = viewport_height / 75;
  var circle_percentage_w = viewport_width / 75;
})

//Stopwatch
//Variables
var second = 00;
var millisecond = 00;
var millisecond2 = document.getElementById("millisecond");
var second2 = document.getElementById("second");
var interval;
var stopwatchStart = document.getElementById("watch-start");
var stopwatchReset = document.getElementById("watch-reset");
var stopwatchStop = document.getElementById("watch-stop");
var score2 = 0;


//Runs on click
function startClock() {
  millisecond++;
  if (millisecond < 9){
    millisecond2.innerHTML = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecond2.innerHTML = millisecond;
  }
  if (millisecond > 99){
    second++;
    second2.innerHTML = "0" + second;
    millisecond = 0;
    millisecond2.innerHTML = "0" + 0;
  }
}
//Clock buttons
stopwatchStart.onclick = function() {
  interval = setInterval(startClock);
};

stopwatchReset.onclick = function() {
  clearInterval(interval);
  millisecond = "00";
  second = "00";
  second2.innerHTML = second;
  millisecond2.innerHTML = millisecond;
};

stopwatchStop.onclick = function() {
  clearInterval(interval);
};

//Move circle
function move() {
//Circle variables
  var horizontal = Math.floor(Math.floor(Math.random() * (68)) + 15);
  var vertical = Math.floor(Math.floor(Math.random() * (59)) + 1);
  var color1 = Math.floor(Math.random() * (255));
  var color2 = Math.floor(Math.random() * (255));
  var color3 = Math.floor(Math.random() * (255));
  var color4 = Math.floor(Math.random() * (255));
  //Moving circle at set distances
  document.getElementById("circle").style.marginLeft = String(horizontal) + "vw";
  document.getElementById("circle").style.marginTop = String(vertical) + "vh";
  //Color change
document.getElementById("circle").style.backgroundColor = "rgb(" + String(color1) + ', ' + String(color2) + ', ' + String(color3) + ', ' + String(color4) + ")";
  //Score
  score2++;
  document.getElementById("score2").innerHTML = score2;
}


//Music
function toggleMusic() {
  var music1 = document.getElementById("music1");
  return music1.paused ? music1.play() : music1.pause();
};

