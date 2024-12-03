// const cloudinary=require("cloudinary").v2;
// const {cloudinaryStorage}=require('multer-storage-cloudinary');

// cloudinary.config({
//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.CLOUD_API_KEY,
//     api_secret:process.env.API_SECRET
// })

// const storage=new cloudinaryStorage({
//     cloudinary:cloudinary,
//     params:{
//         folder:"wanderlust_dev",
//         allowedFormats:["png","jpg","jpeg"]
//     }
// });
// module.exports={cloudinary,storage}



const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "wanderlust_dev",
        allowedFormats: ["png", "jpg", "jpeg"]
    }
});

module.exports = { cloudinary, storage };