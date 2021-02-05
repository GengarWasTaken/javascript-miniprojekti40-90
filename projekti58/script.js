//needles
const hour = document.querySelector(".hour");

const minute = document.querySelector(".minute");

const second = document.querySelector(".second");

//date and time
const time = document.querySelector(".time");

const theDate = document.querySelector(".date");

//dark mode toggle button
const toggle = document.querySelector(".toggle");

//date arrays
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener("click", (e) => {

    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {

        html.classList.remove("dark");

        e.target.innerHTML = "Dark mode";

    } else {

        html.classList.add("dark");

        e.target.innerHTML = "Light mode";

    }

})

function setTime() {

    const now = new Date();

    const month = now.getMonth();
    const day = now.getDay();
    const date = now.getDate();
    const hours = now.getHours();
    const hoursForClock = hours % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? `PM` : `AM`;

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    time.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    theDate.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

    console.log(date);

}

//source for scale: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  setTime();

  setInterval(setTime, 1000);