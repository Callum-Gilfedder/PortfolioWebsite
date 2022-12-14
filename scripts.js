// Theme toggle // 

let toggleButton = document.getElementById("toggle")
toggleButton.addEventListener("click", toggleTheme)
function toggleTheme() {
    let page = document.getElementsByClassName("page")
    for (let pages of page) {
        pages.classList.toggle("page-light")
    }
    let altPage = document.getElementsByClassName("page-alt")
    for (let altPages of altPage) {
        altPages.classList.toggle("page-alt-light")
    };
    let nav = document.getElementById("navbar") 
    nav.classList.toggle("nav-light")

    if (toggleButton.innerHTML === "Light Mode") {
        toggleButton.innerHTML = "Dark Mode";
    } else if (toggleButton.innerHTML = "Dark Mode") {
        toggleButton.innerHTML = "Light Mode";
    }    
}


// Burger MENU toggle //
let burger = document.getElementById("burger")
burger.addEventListener("click", toggleMenu)
let ul = document.getElementById("ul")
ul.classList.toggle("ul-after")
let nav = document.getElementById("navbar") 
nav.classList.toggle("nav-after")

function toggleMenu () {
    if (burger.innerHTML == "☰ Expand Menu") {
        burger.innerHTML = "☰ Collapse Menu";
    } else if (burger.innerHTML = "☰ Collapse Menu") {
        burger.innerHTML = "☰ Expand Menu";
    }

    ul.classList.toggle("ul-after")

    nav.classList.toggle("nav-after")
}

// Slide to page

let home_button = document.getElementById("home-button")
home_button.addEventListener("click", homeButton)
function homeButton() {
     document.getElementById("home-page").scrollIntoView({behavior: 'smooth'});
}

let introduction_button = document.getElementById("introduction-button")
introduction_button.addEventListener("click", introductionButton)
function introductionButton() {
    document.getElementById("introduction-page").scrollIntoView({behavior: 'smooth'});
}

let portfolio_button = document.getElementById("portfolio-button")
portfolio_button.addEventListener("click", portfolioButton)
function portfolioButton() {
    document.getElementById("portfolio-page").scrollIntoView({behavior: 'smooth'});
}

let contact_button = document.getElementById("contact-button")
contact_button.addEventListener("click", contactButton)
function contactButton() {
    document.getElementById("contact-page").scrollIntoView({behavior: 'smooth'});
}