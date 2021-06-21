var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var hero = document.getElementById("hero");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  hero.style.display = "none";
}


span.onclick = function() {
  modal.style.display = "none";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hero.style.display = "block";
  }
}

function myFunction() {

  var copyText = document.getElementById("myInput");

  copyText.select();

  document.execCommand("copy");

  alert("Текст Скопирован");
}