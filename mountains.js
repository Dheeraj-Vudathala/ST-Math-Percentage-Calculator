function Submit() {
    var mountain = document.getElementById("mountain").value;
        if (mountain > 25 || mountain < 0) {
            document.getElementById("answer").innerHTML = "Please enter a valid number."
        }
    else {
        document.getElementById("answer").innerHTML = ("You have completed " + (mountain / 0.25).toFixed(0) + "% of ST Math.");
    }
}
