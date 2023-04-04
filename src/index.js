// Your code here
const filmsUrl = " http://localhost:3000/films";

//Fetch fist movie details
function fetchFirstMovie (id) {
    fetch(`${filmsUrl}/${id}`)
    .then(response => response.json())
    .then(movie => {
        document.getElementById("poster").src = movie.poster;

        document.getElementById("title").innerHTML = movie.title;

        document.getElementById("runtime").innerHTML = movie.runtime;

        document.getElementById("film-info").innerHTML = movie.description;

        document.getElementById("showtime").innerHTML = movie.showtime;

        document.getElementById("ticket-num").innerHTML = movie.capacity - movie.tickets_sold;
    })
}

//Fetch movie titles
function fetchMovieTitles () {
    return fetch(`${filmsUrl}`)
    .then(response => response.json())
    //.then(data => console.log(data));
}

//Display movie titles
function renderMovieTitles (movieTitles) {
    const movieList = document.getElementById("films");
    const movies = document.createElement("li");
    movies.innerHTML = movieTitles.title.toUpperCase();

    movieList.appendChild(movies);
}

fetchMovieTitles().then(movies => {
    movies.forEach(movie => {
        renderMovieTitles(movie);
    })
})

function purchaseMovieTicket() {
    const purchaseMovieTicket =document.getElementById("buy-ticket")
    const ticketNum =document.getElementById("ticket-num")
        purchaseMovieTicket.addEventListener('click', (e) => {
        let count = parseInt(ticketNum.textContent.split(""));
       if(count > 1){
        ticketNum.textContent = `${count - 1}`
      } else {
        ticketNum.innerHTML = ''
        ticketNum.textContent = "SOLD OUT"
      }
      })
    
  }
document.addEventListener("DOMContentLoaded", function () {
    fetchFirstMovie(1);
    fetchMovieTitles();
    purchaseMovieTicket()
})