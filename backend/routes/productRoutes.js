const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const upload = require("../middleware/upload");

router.post("/", upload.single("image"), productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.put(
  "/products/:id",
  upload.single("image"),
  productController.updateProduct
);
router.delete("/products/:id", productController.deleteProduct);

module.exports = router;
