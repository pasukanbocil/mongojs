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

// find movie berdasarkan tahun
// Movie.findOne({ year: { $gte: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find movie berdasarkan id

// Movie.findOne({ _id: "6641880fae5eb49f1335963e" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find movie berdasarkan id
// Movie.findById('6641880fae5eb49f1335963f')
// .then((result) => {
//   console.log(result);
// })
// .catch((err) => {
//   console.log(err);
// });

// update data
// Movie.updateMany({ year:{$lt:2019} }, { rating: 8 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findByIdAndUpdate("6641880fae5eb49f1335963d", { rating: 10 }, { new: true})
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// delete data

// Movie.deleteOne({ title: "Avengers: Infinity War" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// Movie.findByIdAndDelete("6641880fae5eb49f1335963e")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const movie = new Movie({
//   title: "Black Panther",
//   year: 2018,
//   score: 7.3,
//   director: "Dicky",
// });

// Movie.insertMany([
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     rating: 8.4,
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     rating: 8.4,
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,
//     rating: 8.6,
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     year: 2018,
//     rating: 8.4,
//   },
// ])
//   .then((result) => {
//     console.log("it works");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// movie.save();

// console.log(movie);
