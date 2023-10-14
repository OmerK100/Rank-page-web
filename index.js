const submit = document.getElementById("submit");
const selected = document.getElementById("selected");
const mainCont = document.getElementById("main");
const secCont = document.getElementById("sec");
const rates = document.getElementsByClassName("rank-num");

var canSubmit = false;

submit.addEventListener("click" , submitFunc);
function submitFunc() {
  if (canSubmit === true) {
    mainCont.style.display = "none";
    secCont.classList.remove("hidden");
  }
}

for (var i = 0 ; i < rates.length ; i++) {
  rates[i].addEventListener("click" , rateFunc);
}

function rateFunc(event) {
  selected.innerText = "You selected " + event.target.innerText + " Out of 5";
}

document.addEventListener("click" , clickFunc);
function clickFunc(event) {
  var check = event.target.innerText;
  if (check === "1" || check === "2" || check === "3" || check === "4" || check === "5") {
    canSubmit = true;
  }
  else {
    canSubmit = false;
  }
}