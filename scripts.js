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

    let githubLogos = document.getElementsByClassName("github-logo")
    for (let x of githubLogos) {
        x.classList.toggle("github-logo-light")
    }

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
    document.getElementById("page-2-paragraph").innerText = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    document.getElementById("page-2-h1").innerHTML = "Education"
    document.getElementById("page-2-image").src = "education-photo.jpg"


}
