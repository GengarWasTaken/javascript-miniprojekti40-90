//panels
const panels = document.querySelectorAll(".panel");

//toggle panels
panels.forEach((panel) => {

    panel.addEventListener("click", () => {

        removeActiveClasses();
        panel.classList.toggle("active");

    });

});

//remove active classes (before toggling clicked panel)
function removeActiveClasses() {

    panels.forEach((panel) => {

        panel.classList.remove("active");

    });

};