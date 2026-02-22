
const slides = document.querySelectorAll(".slide");
let current = 0;

//Slider
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "prev", "next");
        if (i === index) slide.classList.add("active");
        else if (i < index) slide.classList.add("prev");
        else slide.classList.add("next");
    });
}

function nextSlide() {
    current++;
    if (current >= slides.length) current = 0;
    showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 5000);

//Button hover effect
(() => {

    const button = document.querySelectorAll(".btn");

    button.forEach(btn => {
        btn.addEventListener("mouseover", (event) => {
            console.log("FIRE");
            const x = (event.pageX - btn.offsetLeft);
            const y = (event.pageY - btn.offsetTop);

            btn.style.setProperty("--xpos", x + "px");
            btn.style.setProperty("--ypos", y + "px");
        });
    });

}) ();

//NavBar background change on scroll and hide on inactivity
(() => {

    const navBar = document.querySelector(".navBar");
    // const aboutMainContainer = document.querySelector(".aboutMainContainer"); 
    // const h1 = navBar.querySelector("h1");
    // const span = navBar.querySelectorAll("span");
    // const menu = navBar.querySelector("i");

    // document.addEventListener("scroll", () => {
    
    //     const distance = aboutMainContainer.getBoundingClientRect().top;
    //     const navHeight = navBar.offsetHeight;

    //     if (distance <= navHeight) {
    //         navBar.style.backgroundColor = "black";
    //         h1.style.color = "white";
    //         menu.style.color = "white";
    //         span.forEach(li => {
    //             li.style.color = "white";
    //         });
    //     } else {
    //         navBar.style.backgroundColor = "rgba(255, 255, 255, 0.788)";
    //         h1.style.color = "black";
    //         menu.style.color = "black";
    //         span.forEach(li => {
    //             li.style.color = "black";
    //         });
    //     }
    // });

    let scrollTimer;

    document.addEventListener("scroll", () => {
        navBar.classList.remove("hidden");

        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            navBar.classList.add("hidden");
        }, 2000);
    });

}) ();

//Projects slider
(() => {
    
    let next = 1;

    const projectsContainer = document.querySelector(".ProjectsContainer");
    const imagesnumber = projectsContainer.querySelectorAll("img");

    const totalSlides = imagesnumber.length;

    const imageSize = imagesnumber[0].getBoundingClientRect().width;

    document.addEventListener("click", (event) => {
        if(event.target.classList.contains("next")) {
            projectsContainer.style.transform = `translateX(-${next * imageSize}px)`;
            if(next >= imagesnumber.length) {
                projectsContainer.style.transform = `translateX(0)`;
                next = 1;
            } else {
                next++;
            }
        } else if(event.target.classList.contains("prev")) {
            if(next === 1) {
                projectsContainer.style.transform = `translateX(-${(totalSlides - 1) * imageSize}px)`;
                next = totalSlides;
            } else {
                next--;
                projectsContainer.style.transform = `translateX(-${(next - 1) * imageSize}px)`;
            }
        }
    });
    
})();

//Shows description and pauses animation
function toggleSome(planet, orbit) {
    const skillsContainer = document.querySelector(".skillsContainer").getBoundingClientRect();
    const rect = planet.getBoundingClientRect();
    const description = document.querySelector(".description"); 

    const left = rect.left - skillsContainer.left;
    const top = rect.top - skillsContainer.top;

    description.style.setProperty("--xpos", left + 70 + "px");
    description.style.setProperty("--ypos", top + 10 + "px");
    description.classList.add("show");
    orbit.classList.add("paused");

}

//Hides description and resumes animation
function hideSome(orbit, description) {
    orbit.forEach(element => {
        description.classList.remove("show");
        element.classList.remove("paused"); 
    });  
}

//Description toggle
(() => {
    
    const orbit = document.querySelectorAll(".orbit");
    const mySql = document.querySelector(".mysql");
    const javascript = document.querySelector(".javascript");
    const html = document.querySelector(".html");
    const orbit1 = document.querySelector(".orbit1");
    const orbit2 = document.querySelector(".orbit2");
    const orbit4 = document.querySelector(".orbit4");
    const css = document.querySelector(".css");
    const orbit3 = document.querySelector(".orbit3");

    //MYSQL
    mySql.addEventListener("click", ()=> {

        toggleSome(mySql, orbit1);
        
    });

    const descriptionXbutton = document.querySelector(".descriptionXbutton"); 

    descriptionXbutton.addEventListener("click", () => {
        const description = document.querySelector(".description");

        hideSome(orbit, description);
    });

    //JAVASCRIPT
    javascript.addEventListener("click", () => {
        toggleSome(javascript, orbit2);
    });

    //HTML
    html.addEventListener("click", () => {
        toggleSome(html, orbit4);
    });

    //CSS
    css.addEventListener("click", () => {
        toggleSome(css, orbit3);
    });

}) ();

