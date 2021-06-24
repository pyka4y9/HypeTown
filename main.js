var btn = document.getElementById("demo01");

var hero = document.getElementById("hero");

var body = document.getElementById("body")

var heroMain = document.getElementById("hero__main");

var span = document.getElementsByClassName("close")[0];

var modal = document.getElementById("modal")

btn.onclick = function() {
  heroMain.style.top = "1000px";
  btn.style.background = "#513A3D";
  modal.style.opacity = "1";
  modal.style.bottom = "0";
  hero.style.background= "rgba(0,0,0,0.6)";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.opacity = "0";
    heroMain.style.top = "0";
    btn.style.background = "#A37C81";
    modal.style.bottom = "1000px";
    hero.style.background= "inherit"; 
  }
} 

function myFunction() {

  var copyText = document.getElementById("myInput");

  copyText.select();

  document.execCommand("copy");

  alert("Текст Скопирован");
}