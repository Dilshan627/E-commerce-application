const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerNumber: {
    type: String,
    required: true,
  },
  products: [
    {
      productCode: {
        type: String,
        required: true,
      },
      productQty: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;
