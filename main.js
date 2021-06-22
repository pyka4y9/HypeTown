
var btn = document.getElementById("demo01");

var hero = document.getElementById("hero");


var span = document.getElementsByClassName("close-animatedModal")[0];

btn.onclick = function() {
  hero.style.opacity = "0";
}


span.onclick = function() {
  hero.style.opacity = "1";
}


function myFunction() {

  var copyText = document.getElementById("myInput");

  copyText.select();

  document.execCommand("copy");

  alert("Текст Скопирован");
}