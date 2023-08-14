const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProducts);

router.get("/video/:videoId", productController.getProductsForVideo);

router.get("/api/products/search", productController.searchProducts);

module.exports = router;
