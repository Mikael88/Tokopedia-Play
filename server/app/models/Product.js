const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true },
  urlImageProduct: { type: String, required: true },
  titleProduct: { type: String, required: true },
  priceProduct: { type: Number, required: true },
  videoID: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
