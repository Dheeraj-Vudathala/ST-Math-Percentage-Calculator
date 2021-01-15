function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 32.25).toFixed(0) + "% of ST Math.";
}
