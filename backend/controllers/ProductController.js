const Product = require("../models/Product");
const multer = require("multer");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the directory where uploaded files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for the uploaded file
  },
});

// Create the Multer upload instance
const upload = multer({ storage: storage });

// Create a new product
const createProduct = (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to upload file" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Access the uploaded file
    const image = req.file.filename;

    // Retrieve other fields from the request body
    const { code, name, brand, category, description, price } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      code,
      name,
      brand,
      category,
      description,
      price,
      image,
    });

    // Save the new product to the database
    newProduct
      .save()
      .then((product) => {
        res
          .status(201)
          .json({ message: "Product created successfully", product });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Failed to create product" });
      });
  });
};

// Retrieve all products
const getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve products" });
    });
};

// Retrieve a single product by ID
const getProductById = (req, res) => {
  const productId = req.params.id;
  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve product" });
    });
};

// Update a product by ID
const updateProductById = (req, res) => {
  const productId = req.params.id;
  const { code, name, brand, category, description, price } = req.body;
  Product.findByIdAndUpdate(
    productId,
    { code, name, brand, category, description, price },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res
        .status(200)
        .json({ message: "Product updated successfully", product });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to update product" });
    });
};

// Delete a product by ID
const deleteProductById = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to delete product" });
    });
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
