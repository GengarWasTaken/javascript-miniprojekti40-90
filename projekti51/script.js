/* const open = document.querySelectorAll(".fa-chevron-down");

const close = document.querySelectorAll(".fa-times");

open.forEach(chevron => {

    chevron.addEventListener("click", () => {

        chevron.parentElement.parentElement.classList.add("active");

    })

})

close.forEach(x => {


    x.addEventListener("click", () => {

        x.parentElement.parentElement.classList.remove("active");

    })

}) */

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        toggle.parentNode.classList.toggle("active");

    })

})