const menuBtn = document.querySelector("#menu_btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

//menubutton toggle
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

//click on navbar options
navLinks.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
})

const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000
};

ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right"
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay:500
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000
});


