const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


exports.uploadOnCloudinary = async function(req, res, next) {

  console.log(req.file ,"inside uploadOnCloudinary middleware");

    try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    req.cloudinaryUrl = result.secure_url; // store URL for controller

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Cloudinary upload failed" });
  }
}

exports.upload = multer({ storage });

