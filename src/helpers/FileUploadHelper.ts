import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

// (async function () {
// Configuration
cloudinary.config({
  cloud_name: 'dzutnouxi',
  api_key: '388396993139884',
  api_secret: 'lqx7AVXD1jZJqGO65TKuftlcIWY' // Click 'View Credentials' below to copy your API secret
});

// Upload an image
const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

// console.log(uploadToCloudinary);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

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
  uploadToCloudinary,
  upload
};
