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

    let h1 = document.getElementsByTagName("h1")
    for (let h1s of h1) {
        h1s.classList.toggle("h1-light")
    }

    
    let h2 = document.getElementsByTagName("h2")
    console.log(h2)
    for (let h2s of h2) {
        h2s.classList.toggle("h2-light")
    }



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



var state = ""; 
var count = 0;

function toggleMenu () {
    if (burger.innerHTML == "☰ Expand Menu") {
        burger.innerHTML = "☰ Collapse Menu";
        state = "open";

    } else if (burger.innerHTML = "☰ Collapse Menu") {
        burger.innerHTML = "☰ Expand Menu";
        state = "closed";
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