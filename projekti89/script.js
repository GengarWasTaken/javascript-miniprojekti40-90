const screens = document.querySelectorAll(".screen");

//START GAME UI + ADVANCE TO THE NEXT SCREEN BUTTON
const start_button = document.getElementById("start-btn");

start_button.addEventListener("click", () =>  start_button.parentElement.classList.add("up"));

//INSECT SELECTION MENU + ADVANCE TO THE NEXT SCREEN BUTTON + GAME START
const choose_insect_buttons = document.querySelectorAll(".choose-insect-btn");

choose_insect_buttons.forEach(insect_button => {

    insect_button.addEventListener("click", () => {

        const selectedInsect = insect_button.childNodes[1].innerText;

        insect_button.parentElement.parentElement.parentElement.classList.add("up");

        setInterval(() => {

        startTheGame(selectedInsect)

        }, Math.floor(Math.random() * 1000));

        setInterval(startTime, 1000);

    })

})

//TIME COUNTER - LAST SCREEN
let seconds = 0;

const time = document.getElementById("time");

function startTime() {

    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    time.innerHTML = `Time: ${m}:${s}`;
    seconds++;

}

//START THE GAME - BUG SPAWN FUNCTION
function startTheGame(bug) {

    const randomX = Math.random() * (window.innerWidth - 200) + 100;
    const randomY = Math.random() * (window.innerHeight - 200) + 100;

    if (bug === "Fly") {

        newFly = document.createElement("div");

        newFly.classList.add("insect");

        newFly.style.top = `${randomY}px`;
        newFly.style.left = `${randomX}px`;
        newFly.innerHTML = `<img src="http://pngimg.com/uploads/fly/fly_PNG3946.png" alt="Fly" class="insect-image">`;

        newFly.addEventListener("click", (e) => {

            if (e.target.classList.contains("insect-image")) {

            e.target.parentElement.classList.add("caught");
            score++;

            scoreElement.textContent = `Score: ${score}`;

            }

        })

        screens[2].appendChild(newFly);

    }

    if (bug === "Mosquito") {

        newMosquito = document.createElement("div");

        newMosquito.classList.add("insect");

        newMosquito.style.top = `${randomY}px`;
        newMosquito.style.left = `${randomX}px`;
        newMosquito.innerHTML = `<img src="http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png" alt="Mosquito" class="insect-image">`;

        newMosquito.addEventListener("click", (e) => {

            if (e.target.classList.contains("insect-image")) {

            e.target.parentElement.classList.add("caught");
            score++;

            scoreElement.textContent = `Score: ${score}`;

            }

        })

        screens[2].appendChild(newMosquito);

    }

    if (bug === "Spider") {

        newSpider = document.createElement("div");

        newSpider.classList.add("insect");

        newSpider.style.top = `${randomY}px`;
        newSpider.style.left = `${randomX}px`;
        newSpider.innerHTML = `<img src="http://pngimg.com/uploads/spider/spider_PNG12.png" alt="Mosquito" class="insect-image">`;

        newSpider.addEventListener("click", (e) => {

            if (e.target.classList.contains("insect-image")) {

            e.target.parentElement.classList.add("caught");
            score++;

            scoreElement.textContent = `Score: ${score}`;

            }

        })

        screens[2].appendChild(newSpider);

    }

    if (bug === "Roach") {

        newRoach = document.createElement("div");

        newRoach.classList.add("insect");

        newRoach.style.top = `${randomY}px`;
        newRoach.style.left = `${randomX}px`;
        newRoach.innerHTML = `<img src="http://pngimg.com/uploads/roach/roach_PNG12163.png" alt="Mosquito" class="insect-image">`;

        newRoach.addEventListener("click", (e) => {

            if (e.target.classList.contains("insect-image")) {

            e.target.parentElement.classList.add("caught");
            score++;

            scoreElement.textContent = `Score: ${score}`;

            }

        })

        screens[2].appendChild(newRoach); 

    }

    if (score > 19) {

        message.classList.add("visible");
    
    }

}

//SCOREBOARD - LAST SCREEN - MESSAGE
const scoreElement = document.getElementById("score");

const message = document.getElementById("message");

let score = 0;

//RESTART GAME
const refresh = document.getElementById("refresh");

refresh.addEventListener("click", () => {

    location.reload();

});