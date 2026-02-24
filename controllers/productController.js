const Product = require("../models/Product");

// CREATE
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
      image: req.file ? req.file.filename : "",
    });

    const saved = await newProduct.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET + SEARCH + FILTER
exports.getProducts = async (req, res) => {
  const { search, category } = req.query;

  let query = {};

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  const products = await Product.find(query).sort({ createdAt: -1 });
  res.json(products);
};

// UPDATE
exports.updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      ...(req.file && { image: req.file.filename }),
    },
    { new: true }
  );

  res.json(updated);
};

// DELETE
exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted Successfully" });
};