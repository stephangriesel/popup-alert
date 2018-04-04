var popup = 0;
function pop() {
    if (popup == 0) {
        document.getElementById("box").style.display = "block";
        popup = 1;
    } else {
        document.getElementById("box").style.display = "none";
        popup = 0;
    }
}