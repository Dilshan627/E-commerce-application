const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const purchaseRouter = require("./routes/purchaseRoutes");

require("dotenv").config();

const PORT = process.env.PORT;

// Create Express application
const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/purchases", purchaseRouter);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
