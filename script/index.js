function openMobileNav() {
    var elements = document.getElementsByClassName("main-nav");
	var x = elements[0]
	
    if (x.style.display === "block") {
		x.style.display = "none";
    } else {
		x.style.display = "block";
    }
}