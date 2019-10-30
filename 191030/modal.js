function showModal() {
  console.log("called");
  let modal = document.querySelector("div#modal");
  modal.innerHTML = "クリックされたよ！";
}

function changeRed() {
  console.log("changeRed() called");
  let modal = document.querySelector("div#modal");
  modal.style.backgroundColor = "rgb(255,0,0)";
}
function changeYellow() {
  console.log("changeYellow() called");
  let modal = document.querySelector("div#modal");
  modal.style.backgroundColor = "rgb(255,255,0)";
}
function changeGreen() {
  console.log("changeGreen() called");
  let modal = document.querySelector("div#modal");
  modal.style.backgroundColor = "rgb(0,255,0)";
}

function appendCircle() {
  console.log("appendCircle()called");
  let modal = document.querySelector("div#modal");
  modal.append("○");
}
function appendCross() {
  console.log("appendCross()called");
  let modal = document.querySelector("div#modal");
  modal.append("☓");
}

function plusOne() {
  console.log("plusOne()called");
  let modal = document.querySelector("div#modal");
  modal.innerHTML=+1;
}
function plusFive() {
  console.log("plusFive()called");
  let modal = document.querySelector("div#modal");
  modal.innerHTML=+5;
}
function plusTen() {
  console.log("plusTen()called");
  let modal = document.querySelector("div#modal");
  modal.innerHTML=+10;
}
