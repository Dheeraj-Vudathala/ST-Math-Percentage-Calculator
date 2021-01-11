function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    if (puzzles > 3268 || puzzles < 0) {
        document.getElementById("answer").innerHTML = "Please enter a valid number."
    }
    else {
        document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 32.68).toFixed(0) + "% of ST Math.";
    }
}
