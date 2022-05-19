const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const movieData = document.querySelector(".row");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  showMovies(data.results);
}

function showMovies(movies) {
  movieData.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const res = document.createElement("div");
    res.classList.add("col");
    res.classList.add("l-3");
    res.classList.add("m-4");
    res.classList.add("c-12");
    movieData.appendChild(res);
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
            ${overview}
          </div>
    `;
    res.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = search.value;
  if (value && value !== "") {
    getMovies(SEARCH_API + value);
    value = "";
  } else {
    window.location.reload();
  }
});
