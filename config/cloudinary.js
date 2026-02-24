const cloudinary= require("cloudinary").v2;
require("dotenv").config();

 
// Configuration
console.log("Cloudinary Config:", {
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudinaryApiKey,
  api_secret: process.env.cloudinaryApiSecret
});
    cloudinary.config({ 
        cloud_name: process.env.cloudName, 
        api_key: process.env.cloudinaryApiKey, 
        api_secret: process.env.cloudinaryApiSecret // Click 'View API Keys' above to copy your API secret
    });

    module.exports = cloudinary;