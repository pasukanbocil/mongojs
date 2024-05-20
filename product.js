const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const tshirt = new Product({ name: "Tshirt L", price: 200000});

tshirt
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
