document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector("#menu_btn");
    const navLinks = document.querySelector("#nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
    });
});
