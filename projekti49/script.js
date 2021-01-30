const jokeArea = document.getElementById("joke");

const getJoke = document.getElementById("joke-btn");

generateJoke();

async function generateJoke() {

    const config = {

        headers: {
            "Accept": "application/json"
        }
    }

    const response = await fetch("https://icanhazdadjoke.com", config);

    const data = await response.json();

    jokeArea.innerHTML = data.joke;
    

}

getJoke.addEventListener("click", generateJoke);