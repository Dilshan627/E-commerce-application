const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/PurchaseController");

// GET all purchases
router.get("/", purchaseController.getAllPurchases);

// POST a new purchase
router.post("/", purchaseController.createPurchase);

module.exports = router;
