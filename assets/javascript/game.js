var totalScore = 0;
var winScore = 0;
var loseScore = 0;
var randomNum = 0;

function crystalValue() {
  crystal1 = Math.floor(Math.random() * 12) + 1;
  crystal2 = Math.floor(Math.random() * 12) + 1;
  crystal3 = Math.floor(Math.random() * 12) + 1;
  crystal4 = Math.floor(Math.random() * 12) + 1;
}

function randomNumber() {
  randomNum = Math.floor(Math.random() * 100) + 19;
  $("#starterNumber").show();
  $("#starterNumber").text(randomNum);
}

crystals = {onclickFunction: function(buttonValue) {
    if (buttonValue === "crystal1") {
      buttonValue = crystal1;
    } else if (buttonValue === "crystal2") {
      buttonValue = crystal2;
    } else if (buttonValue === "crystal3") {
      buttonValue = crystal3;
    } else if (buttonValue === "crystal4") {
      buttonValue = crystal4;
    }
    totalScore += buttonValue;
    $("#scoreCounter").show();
    $("#scoreCounter").text(totalScore);
  }
};



