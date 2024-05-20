const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

personSchema.pre("save", async function () {
    this.firstName = 'Meli'
    this.lastName = 'Amelia'
  console.log("persiapan menyimpan data");
});

personSchema.post("save", async function () {
  console.log("data berhasil disimpan");
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  firstName: "Dicky",
  lastName: "Satria",
});

console.log(person.fullName);

person
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
