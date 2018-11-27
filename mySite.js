function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function stop() {
    var audio = document.getElementById("audio");
    audio.pause();
}

function play2() {
    var audio2 = document.getElementById("audio2");
    audio2.play();
}

function stop2() {
    var audio2 = document.getElementById("audio2");
    audio2.pause();
}

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}