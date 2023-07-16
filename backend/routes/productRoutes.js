const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/ProductController");

// Set up Multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes for CRUD operations
router.post("/", upload.single("image"), productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProductById);
router.delete("/:id", productController.deleteProductById);

module.exports = router;
