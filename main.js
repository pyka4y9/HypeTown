var btn = document.getElementById("demo01");

var hero = document.getElementById("hero");


var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("modal")

btn.onclick = function() {
  hero.style.opacity = "0";
  btn.style.background = "#513A3D";
  modal.style.opacity = "1";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.opacity = "0";
    hero.style.opacity = "1";
    btn.style.background = "#A37C81";
  }
} 

function myFunction() {

  var copyText = document.getElementById("myInput");

  copyText.select();

  document.execCommand("copy");

  alert("Текст Скопирован");
}