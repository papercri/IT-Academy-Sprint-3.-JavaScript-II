

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map((movie) => movie.director);
  //console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesByDirector = getMoviesFromDirector(array, director);
  const totalScore = moviesByDirector.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  let averageScore = totalScore / moviesByDirector.length;
  const result = +averageScore.toFixed(2);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(movie => movie.title);
  titles.sort();
  let result = titles.slice(0, 20)
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedByYear = array.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const moviesByGenre =array.filter((movie) => movie.genre.includes(genre));
  const totalScore = moviesByGenre.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);
  let averageScore = totalScore / moviesByGenre.length;
  const result = +averageScore.toFixed(2);
  return result
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(movie => {
  
    const durationStr = movie.duration.split(" ");
    let minutes = 0;

    durationStr.forEach(str => {
      if (str.includes("h")){
        minutes += parseInt(str) * 60
      } else if (str.includes("min")){
        minutes += parseInt(str);
      }
    });
    return {
      ...movie,
      duration: minutes
    };
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const movieByYear = array.filter((movie) => movie.year === year);
  const sortedByScore = movieByYear.sort((a, b) => b.score - a.score);
  return [sortedByScore[0]]

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
