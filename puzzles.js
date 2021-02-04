function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    if puzzles > 3546 {
        document.getElementById("answer").innerHTML = "Please enter a valid number.";
    }
    document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 32.25).toFixed(0) + "% of ST Math.";
}
