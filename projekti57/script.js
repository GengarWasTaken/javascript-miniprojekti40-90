//body(background) and slides
const body = document.body;

const slides = document.querySelectorAll(".slide");

//shuffle buttons
const prev = document.getElementById("left");

const next = document.getElementById("right");

let activeSlide = 0;

setBgToBody();

setActiveSlide();

function setBgToBody() {

    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}

function setActiveSlide() {

    slides.forEach(slide => {

        slide.classList.remove("active");

        slides[activeSlide].classList.add("active");

    })

}

next.addEventListener("click", () => {

    if (activeSlide === 4) {

        activeSlide = -1;

    }

    activeSlide++;

    setActiveSlide();

    setBgToBody();

})

prev.addEventListener("click", () => {

    if (activeSlide === 0) {

        activeSlide = 5;

    }

    activeSlide--;

    setActiveSlide();

    setBgToBody();

})