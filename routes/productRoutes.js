const express = require("express");
const router = express.Router();
const {upload,uploadOnCloudinary} = require("../middleware/upload");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.post("/upload", upload.single("image"), uploadOnCloudinary, createProduct);
router.get("/", getProducts);
router.put("/:id", upload.single("image"), updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;