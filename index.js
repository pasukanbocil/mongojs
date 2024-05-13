const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// const movie = new Movie({
//   title: "Black Panther",
//   year: 2018,
//   score: 7.3,
//   director: "Dicky",
// });

Movie.insertMany([
  {
    title: "Avengers: Infinity War",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    year: 2018,
    rating: 8.4,
  },
  {
    title: "Joker",
    genre: "Crime",
    director: "Todd Phillips",
    year: 2019,
    rating: 8.4,
  },
  {
    title: "Parasite",
    genre: "Drama",
    director: "Bong Joon Ho",
    year: 2019,
    rating: 8.6,
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    year: 2018,
    rating: 8.4,
  },
])
  .then((result) => {
    console.log("it works");
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// movie.save();

// console.log(movie);
