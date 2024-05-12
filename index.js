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
  score: Number,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const movie = new Movie({
  title: "Black Panther",
  year: 2018,
  score: 7.3,
  director: "Dicky",
});

movie.save();

console.log(movie);
