
const slides = document.querySelectorAll(".slide");
let current = 0;

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

// nav bar change color
(() => {

    const navBar = document.querySelector(".navBar");
    const aboutMainContainer = document.querySelector(".aboutMainContainer"); 
    const h1 = navBar.querySelector("h1");
    const span = navBar.querySelectorAll("span");
    const menu = navBar.querySelector("i");

    document.addEventListener("scroll", () => {
    
        const distance = aboutMainContainer.getBoundingClientRect().top;
        const navHeight = navBar.offsetHeight;

        if (distance <= navHeight) {
            navBar.style.backgroundColor = "black";
            h1.style.color = "white";
            menu.style.color = "white";
            span.forEach(li => {
                li.style.color = "white";
            });
        } else {
            navBar.style.backgroundColor = "rgba(255, 255, 255, 0.788)";
            h1.style.color = "black";
            menu.style.color = "black";
            span.forEach(li => {
                li.style.color = "black";
            });
        }
    });

}) ();

// skills projects slides
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


