var totalScore = 0;
var winScore = 0;
var loseScore = 0;
var randomNum = 0;

function crystalValue() {
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
};

function randomNumber() {
    randomNum = Math.floor(Math.random() * 100) + 19;
    $("#starterNumber").show();
    $("#starterNumber").text(randomNum);
};

crystals = {onclickFunction: function (buttonValue) {
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
        tracker();
    }
};

// $( document ).ready(function() {

function scoreTrack() {
    $("#scoreCounter").text(totalScore);
    $("#winScore").text(winScore);
    $("#loseScore").text(loseScore);
}

$(".buttons").on("click", function () {
    crystals.onclickFunction($(this).attr("id"));
});

function tracker() {
    if (totalScore === randomNum) {
        winScore++;
        $("#winScore").text(winScore);
        $("#theResult").show();
        $("#theResult").text("You Win!");
        reset();
    } else if (totalScore > randomNum) {
        loseScore++;
        $("#loseScore").text(loseScore);
        $("#theResult").show();
        $("#theResult").text("You Lost!");
        reset();
    }
};
/* will reset the crystal buttons value, new number, and score counter reset to 0 */
function reset() {
    crystalValue();
    randomNumber();
    scoreTrack();
    $("#scoreCounter").show();
    $("#scoreCounter").text("0");
    totalScore = 0;
};
reset();
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
// });



