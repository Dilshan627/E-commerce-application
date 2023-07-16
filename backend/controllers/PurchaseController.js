const Purchase = require("../models/Purchase");

// GET all purchases
const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.status(200).json(purchases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch purchases" });
  }
};

// POST a new purchase
const createPurchase = async (req, res) => {
  const { customerName, customerNumber, products, totalPrice, payment } =
    req.body;
  try {
    const newPurchase = await Purchase.create({
      customerName,
      customerNumber,
      products,
      totalPrice,
      payment,
    });
    res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create purchase" });
  }
};

module.exports = { getAllPurchases, createPurchase };
