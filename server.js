const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes=require("./routes/productRoutes")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/products", productRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/products", require("./routes/productRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));