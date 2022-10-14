// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const data = require("./data.js");

function getAllDirectors(moviesArray) {
  const data = moviesArray.map(function (element) {
    return element.director;
  });
  return data;
}

// TOURNER DANS LE TABLEAU
// RÉCUPERER DATA DE DIRECTOR

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const steven = moviesArray.filter(function (el) {
    if (el.director === "Steven Spielberg" && el.genre.includes("Drama")) {
      return el.director;
    }
  });
  return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  const sum = moviesArray.reduce((acc, value) => {
    if (!value.score) {
      return acc;
    }
    acc += value.score;
    return acc;
  }, 0);
  return Number((sum / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter(function (el) {
    if (el.genre.includes("Drama")) {
      return el.score;
    }
  });

  const avg = dramaArray.reduce((acc, value) => {
    acc += value.score;
    return acc;
  }, 0);
  return Number((avg / dramaArray.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const order = moviesArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (b.year < a.year) {
      return 1;
    }
  });
  return (neworder = [...order]);
}

orderByYear(data);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const twenty = moviesArray.filter(function (el) {
    console.log(el);
  });
}

orderAlphabetically(data);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
