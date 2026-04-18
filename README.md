# Product Management API 🚀

A professional RESTful API for managing products, featuring secure image uploads, cloud storage integration, and robust data validation. This project was built as part of the Level 1 Backend Development Task.

## ✨ Key Features
*   **Full CRUD Operations**: Create, Read, Update, and Delete products seamlessly.
*   **Image Upload & Cloud Storage**: Integrated with **Multer** for local handling and **Cloudinary** for scalable cloud storage.
*   **Advanced Security**: Real file-type validation (Magic Numbers) and secure error handling to prevent malicious uploads.
*   **Robust Validation**: Data integrity ensured via Mongoose schemas (e.g., positive pricing, required fields).
*   **Clean Architecture**: Organized folder structure (Routes, Models, Utils, Config) for high maintainability.

## 🛠️ Tech Stack
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Database**: MongoDB (Mongoose)
*   **Cloud Media**: Cloudinary
*   **Deployment**: Render

## 🚀 How it Works
1.  **POST `/product/upload`**: Validates data and image, uploads to Cloudinary, and saves to MongoDB.
2.  **GET `/product`**: Retrieves all products.
3.  **PUT `/product/:id`**: Updates product details and replaces cloud images intelligently.
4.  **DELETE `/product/:id`**: Removes product from Database and deletes the associated image from Cloudinary.
