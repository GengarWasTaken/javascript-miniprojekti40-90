const boxesContainer = document.getElementById("boxes");

const button = document.getElementById("btn");

button.addEventListener("click", () => {

    boxesContainer.classList.toggle("big");

})

function createBoxes() {

    for (let i = 0; i < 4; i++) {

        for (let z = 0; z < 4; z++) {

            const box = document.createElement("div");
            box.classList.add("box");

            box.style.backgroundPosition = `${-z * 125}px ${-i * 125}px`;

            boxesContainer.appendChild(box);

        }

    }

}

createBoxes();