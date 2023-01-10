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
    document.getElementById("page-2-paragraph").innerHTML = "Currently working as a cloud specialist at Go Deploy. I am responsible for the creation and upkeep of tutorials aimed at IT professionals. Initially I was trainined in Azure, AWS and GCP, then I helped create a number of cloud tutorials for the company. As time progressed my focus shifted towards software development tutorials. This sparked my passion for software development. I created a variety of  tutorials and courses on different programming languages. This lead to a deeper understanding of languages such as Python, HTML, CSS and JavaScript. Experienced in many fields of mathematics with strengths in applied, pure and computational mathematics. You can explore more details of my education and experience here and you can view a selection of projects from my portfolio on the page below.   "
    document.getElementById("page-2-h1").innerHTML = "Introduction"
    document.getElementById("page-2-image").src = "profile-pic (21).png"

}


let experienceButton = document.getElementById("experience-button")
experienceButton.addEventListener("click", experienceFunction)
function experienceFunction () {
    document.getElementById("page-2-paragraph").innerText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    document.getElementById("page-2-h1").innerHTML = "Experience"
    document.getElementById("page-2-image").src = "experience-photo (2).jpg"

}

let educationButton = document.getElementById("education-button")
educationButton.addEventListener("click", educationFunction)
function educationFunction () {
    document.getElementById("page-2-paragraph").innerText = "I have a masters of mathematics from the University of Leeds. My masters dissertation had a large programming component as you can see in my portfolio section below. This was an extensive project that really sparked my passion for programming and software development. My Bachelors dissertation was also mainly a programming project. The title was 'Computational Applied Mathematics'. I trained for 4 years with Python throughout my degree and this lead to a strong understanding of the language. A selection of the modules I studied are the following. Computational mathematics. General relativity. Entropy. Linear and non-linear Waves. Advanced mathematical methods. Statistics. Logic. Financial mathematics 1 - 3. Analysis. Topology and geometry."
    document.getElementById("page-2-h1").innerHTML = "Education"
    document.getElementById("page-2-image").src = "education-photo.jpg"


}
