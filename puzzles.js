function Submit() {
    var puzzles = document.getElementById("puzzles").value;
    alert("puzzles");
    if puzzles > 3546 {
        document.getElementById("answer").innerHTML = "Please enter a valid number.";
        alert("if puzzles");
    }
    
    else {
        document.getElementById("answer").innerHTML = "You have completed " + (puzzles / 32.25).toFixed(0) + "% of ST Math.";
        alert("else puzzles");
    }
}
