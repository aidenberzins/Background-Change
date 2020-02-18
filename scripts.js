let dbutton = document.querySelector("#bg-default");
let rbutton = document.querySelector("#bg-random");
let bg = document.querySelector("body");

// Function to reset background to default color
dbutton.addEventListener("click", function() {
  bg.style.backgroundColor = "#353535";
});

// Function to change background to random color
rbutton.addEventListener("click", function() {
  let r = pickNumber();
  let g = pickNumber();
  let b = pickNumber();
  bg.style.backgroundColor = "rgb(" + [r, g, b].join(",") + ")";
});

// Function to generate random number 0-256
const pickNumber = () => Math.floor(Math.random() * 257);
