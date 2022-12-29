
const togglrButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links")

togglrButton.addEventListener('click', ()=>{
    navLinks.classList.toggle("active")
})