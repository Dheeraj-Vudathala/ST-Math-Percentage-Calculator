function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    if (puzzles > 2986 || puzzles < 0) {
        document.getElementById("answer").innerHTML = "Please enter a valid number."
    }
    else {
        document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 29.8660714).toFixed(0) + "% of ST Math.";
    }
}
