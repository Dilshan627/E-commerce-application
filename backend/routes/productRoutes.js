const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.post("/add", productController.createProduct);
router.get("/getItem", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);

router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
