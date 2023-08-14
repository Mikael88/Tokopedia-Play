const Product = require("../models/Product");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  },

  getProductsForVideo: async (req, res) => {
    try {
      const videoId = req.params.videoId;
      const products = await Product.find({ videoID: videoId });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error });
    }
  },

  searchProducts: async (req, res) => {
    try {
      const { productID, titleProduct } = req.query;
      const query = {};

      if (productID) {
        query.productID = productID;
      }

      if (titleProduct) {
        query.titleProduct = titleProduct;
      }

      const products = await Product.find(query);
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Error searching products", error });
    }
  },
};
