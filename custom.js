var testInput = document.getElementById("customText");
// get all input fields
var allFields = document.querySelectorAll('input[name="inputFields"]');

// add event listener on custiom input
testInput.addEventListener("keyup", modifyText);

// change the value of all input fields
function modifyText() {
  allFields.forEach(i => {
    i.value = testInput.value;
  });
}

// font - size
var testFontSize = document.querySelector("#fontSize");

testFontSize.addEventListener("change", modifyFontSize);

function modifyFontSize() {
  let fSize = testFontSize.value.toString();
  allFields.forEach(i => {
    i.style.fontSize = `${fSize}px`;
  });
}

// change page theme
var black = document.querySelector("#black");
black.addEventListener("click", function() {
  document.body.style.background = "black";
});

var white = document.querySelector("#white");
white.addEventListener("click", function() {
  document.body.style.background = "white";
});

// reset everything
var btn = document.querySelector("#resetMode");
btn.addEventListener("click", function() {
  window.location.reload();
});

// change to grid;
let ischange = false;
var btn2 = document.querySelector(".btn2");

function changeToGrid() {
  ischange = !ischange;
  if (ischange) {
    var gridContainer = document.querySelector("#fontCardsContainer");
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(1,1fr)`;
    document
      .querySelectorAll(".fontCardName")
      .forEach(i => (i.style.width = "180vh"));
    document.querySelectorAll("#fontCardsContainer input").forEach(i => {
      i.style.width = "150vh";
    });
  }

  if (!ischange) window.location.reload();
}

btn2.addEventListener("click", changeToGrid);
