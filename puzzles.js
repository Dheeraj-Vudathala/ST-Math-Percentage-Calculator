function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    else {
        document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 32.25).toFixed(0) + "% of ST Math.";
    }
}
