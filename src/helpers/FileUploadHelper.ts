import { v2 as cloudinary } from 'cloudinary';

// (async function () {
// Configuration
cloudinary.config({
  cloud_name: 'dzutnouxi',
  api_key: '388396993139884',
  api_secret: 'lqx7AVXD1jZJqGO65TKuftlcIWY' // Click 'View Credentials' below to copy your API secret
});

// Upload an image
const uploadToCloudinary = async () => {
  await cloudinary.uploader
    .upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
      public_id: 'shoes'
    })
    .catch((error) => {
      console.log(error);
    });
};

console.log(uploadToCloudinary);

// Optimize delivery by resizing and applying auto-format and auto-quality
const optimizeUrl = cloudinary.url('shoes', {
  fetch_format: 'auto',
  quality: 'auto'
});

console.log(optimizeUrl);

// Transform the image: auto-crop to square aspect_ratio
const autoCropUrl = cloudinary.url('shoes', {
  crop: 'auto',
  gravity: 'auto',
  width: 500,
  height: 500
});

console.log(autoCropUrl);
// })();

export const FileUploadHelper = {
  uploadToCloudinary
};
