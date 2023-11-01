// 8-script.js
$(document).ready(function() {
  $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
    const movies = data.results;
    const listMovies = $('#list_movies');
    movies.forEach(function(movie) {
      listMovies.append(`<li>${movie.title}</li>`);
    });
  });
});
