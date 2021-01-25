function openMobileNav() {
    var x = document.getElementById("main-nav");
	
    if (x.style.display === "block") {
		x.style.display = "none";
    } else {
		x.style.display = "block";
    }
}