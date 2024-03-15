window.addEventListener('scroll', function() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    var sticky = navbar.getBoundingClientRect().top;

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});