//import { movies } from './data.js';
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);

  console.log("EXERCICE 1 ->", result);
  return result;
}
//function getAllDirectors(movies);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movies => movies.director == director  );

  console.log("EXERCICE 2 ->", result);
  return result;
}
//getMoviesFromDirector(movies, "Ridley Scott");

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  directorMovies = array.filter(movies => movies.director == director);
  averageScore = [];

  moviesScore = directorMovies.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.score;
  }, 0);

  averageScore = moviesScore/directorMovies.length

  let result = Number(Number(averageScore).toFixed(2));

  console.log("EXERCICE 3 ->", result);
  return result;
}
//moviesAverageOfDirector(movies, "Ridley Scott");



// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {

let result = array.map(movie => movie.title);

let listOrdered = result.sort();
let listFirst20ordered = listOrdered.slice(0,20);
result = listFirst20ordered;

console.log("EXERCICE 4 ->", result);
return result;

}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result;
  let moviesYear = array.sort((a, b) =>
  (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1 );

  moviesYearByTitle = moviesYear.map(({year, title}) => ({year, title}));
  result = moviesYearByTitle;
  console.log("EXERCICE 5 ->", result);
return result;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
