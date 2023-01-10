// Experimental hover affect, only functional for dark mode at the moment.


// document.addEventListener('mousemove', logKey);

// function logKey(e) {
//     // all of above taken from MDN documentation
//     console.log(e.clientX, e.clientY);
//     let x = document.getElementsByClassName("page");
//     for (xs of x) {
//         xs.style.backgroundImage = "radial-gradient(700px 700px at " + e.clientX  + "px " + e.clientY + "px, var(--gradient-grey), var(--background-dark-mode))"

//     } 

//     let y = document.getElementsByClassName("page-alt");
//     for (ys of y) {
//         ys.style.backgroundImage = "radial-gradient(700px 700px at " + e.clientX  + "px " + e.clientY + "px, var(--gradient-grey-alt), var(--background-alt-dark-mode))"

//     } 
// }


// Theme toggle // 

let toggleButton = document.getElementById("toggle")
toggleButton.addEventListener("click", toggleTheme)
function toggleTheme() {
    var themeState = "Dark mode"; // default
    if (toggleButton.innerHTML === "Light Mode") {
        themeState = "Light mode";
        console.log(themeState)
    } else if (toggleButton.innerHTML = "Dark Mode") {
        themeState = "Dark mode";
        console.log(themeState)    
    }    
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
    for (let h2s of h2) {
        h2s.classList.toggle("h2-light")
    }

    let p = document.getElementsByClassName("page-2-paragraph")
    for (ps of p) {
        ps.classList.toggle("p-light")

    }

    let pageThreeItems = document.getElementsByClassName("page-3-container-item")
    for (let x of pageThreeItems) {
        x.classList.toggle("page-3-container-item-light")
    }

    let pageThreeSubtext = document.getElementsByClassName("page-3-subtext")
    for (let x of pageThreeSubtext) {
        x.classList.toggle("page-3-subtext-light")
    }
    
    let pageThreeParagraph = document.getElementsByClassName("page-3-paragraph")
    for (let x of pageThreeParagraph) { 
        x.classList.toggle("page-3-paragraph-light")
    }

    let githubLogoOne = document.getElementById("github-logo-1")
    githubLogoOne.classList.toggle("github-logo-light")

    let githubLogoTwo = document.getElementById("github-logo-2")
    githubLogoTwo.classList.toggle("github-logo-light")

    let githubLogoThree = document.getElementById("github-logo-3")
    githubLogoThree.classList.toggle("github-logo-light")



    document.getElementById("page-4-container-item-2").classList.toggle("page-4-container-item-2-light")

    document.getElementById("page-4-container-item-1").classList.toggle("page-4-container-item-1-light")

    let formEntries = document.getElementsByClassName("form-1")
    for (let x of formEntries) {
        x.classList.toggle("form-1-light")
    }

    let formButton = document.getElementsByClassName("form-button")
    for (let x of formButton) {
        x.classList.toggle("form-button-light")
    }

    let linkButtons = document.getElementsByClassName("link-1")
    for (let x of linkButtons) {
        x.classList.toggle("link-1-light")
    }

    if (toggleButton.innerHTML === "Light Mode") {
        toggleButton.innerHTML = "Dark Mode";
    } else if (toggleButton.innerHTML = "Dark Mode") {
        toggleButton.innerHTML = "Light Mode";
    }    

}


// Mouse hover affect // 



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

// Page 2 select which information section you want

let introductionInfoButton = document.getElementById("introduction-info-button")
introductionInfoButton.addEventListener("click", introductionInfoFunction)
function introductionInfoFunction () {
    document.getElementById("page-2-paragraph").innerHTML = "Gained extensive experience with HTML, CSS, JavaScript and Python from my current role at Go Deploy. Diligently created over 100 polished tutorials aimed at IT professionals with a focus on software development.  Skilled mathematician placing in the top 10 students on the masters programme during the first semester of year 3. Subsequently being nominated to apply for a summer school at the London Mathematics Society. Strong programming experience from both my degree and work. Experienced in many fields of mathematics with strengths in applied, pure and computational mathematics.  You can explore more details of my education and experience here and you can view a selection of projects from my portfolio on the page below."
    document.getElementById("page-2-h1").innerHTML = "Introduction"
    document.getElementById("page-2-image").src = "profile-pic (21).png"

}


let experienceButton = document.getElementById("experience-button")
experienceButton.addEventListener("click", experienceFunction)
function experienceFunction () {
    document.getElementById("page-2-paragraph").innerText = "Gained experience in front-end web development with HTML, CSS, JavaScript and I am currently working on the basics of React. Greatly developed my experience with Python as well as learning the basics of Django. Overall my role at Go Deploy was to create tutorials that were sold to customers wanting to expand their tech knowledge. Even though my role title was cloud specialist I was given great freedom to choose the topics we created tutorials about, so I was initially trained in Azure but then turned my focus towards creating full length courses teaching software development. Courses created at an intermediate level included: HTML, CSS, JavaScript, Python. Courses created at introductory level included: React, Django, R, Go, Pandas (Python Library), PostgreSQL. This lead to an understanding and practical application of all of the mentioned languages and frameworks."
    document.getElementById("page-2-h1").innerHTML = "Experience"
    document.getElementById("page-2-image").src = "experience-photo (2).jpg"

}

let educationButton = document.getElementById("education-button")
educationButton.addEventListener("click", educationFunction)
function educationFunction () {
    document.getElementById("page-2-paragraph").innerText = "I have a masters degree in mathematics from the university of Leeds. My master's dissertation was called Periodic solutions of the N-body problem. I Independently developed a computational technique for measuring a quantity of vital importance to my topic that I then optimized twice. Improving it's performance by a factor of 1000-10000% depending on the circumstances. This project numerically simulated solar system dynamics for long-term stability forecasting and extrapolation. Displaying considerable ability in dealing with exceedingly complicated topics with a rigorous and scientific attention to detail. Modules I studied throughout my degree included: General Relativity. Entropy. Linear and Non-linear Waves. Advanced Mathematical Methods. Statistics. Logic. Financial Mathematics 1 - 3. Analysis. Topology and Geometry. Computational Mathematics."
    document.getElementById("page-2-h1").innerHTML = "Education"
    document.getElementById("page-2-image").src = "education-photo.jpg"


}
