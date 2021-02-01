const key = "ffa8f37c263b00e21b2e4ef474355156";

//by popularity
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`

const main = document.querySelector("main");

const movie = document.querySelector(".movie");

const form = document.querySelector("form");

const search = document.getElementById("search");



//get most popular movies when site opens
async function getMovie() {

    const response = await fetch(API_URL);

    const data = await response.json();

    const arrayOfMovies = data.results;

    arrayOfMovies.forEach(movie => {

        let ratingColor;

        if (movie.vote_average >= 8) {

        ratingColor = "green";

        }

        else if (movie.vote_average < 8 && movie.vote_average > 6) {

            ratingColor = "orange";

        }

        else {

            ratingColor = "red";

        }

        let html = `
        <div class="movie">

        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="">

        <div class="movie-info">

            <h3>${movie.title}</h3>

            <span class="${ratingColor}">${movie.vote_average}</span>

        </div>

        <div class="overview">

            <h3>Overview</h3>

            ${movie.overview}

        </div>

    </div>
    `

    main.innerHTML += html;

    })

}

getMovie();

async function GetMovieByTitle(query) {

    main.innerHTML = "";

    const API_URL_TITLE = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`

    const response = await fetch(API_URL_TITLE);

    const data = await response.json();

    const arrayOfMoviesByTitle = data.results;

/*     console.log(arrayOfMoviesByTitle); */

    arrayOfMoviesByTitle.forEach(movie => {

        let ratingColor;

        if (movie.vote_average >= 8) {

        ratingColor = "green";

        }

        else if (movie.vote_average < 8 && movie.vote_average > 6) {

            ratingColor = "orange";

        }

        else {

            ratingColor = "red";

        }

        let html = `
        <div class="movie">

        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="">

        <div class="movie-info">

            <h3>${movie.title}</h3>

            <span class="${ratingColor}">${movie.vote_average}</span>

        </div>

        <div class="overview">

            <h3>Overview</h3>

            ${movie.overview}

        </div>

    </div>
    `

    main.innerHTML += html;

    })

}

//search movies by title
form.addEventListener("submit", (e) => {

    e.preventDefault();

    GetMovieByTitle(search.value);

})