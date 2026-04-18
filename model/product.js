const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { 
        type: Number, 
        required: true, 
        min: [0.01, 'السعر يجب أن يكون رقماً موجباً'] // التحقق من السعر
    },
    quantity: { 
        type: Number, 
        required: true, 
        min: [0, 'الكمية لا يمكن أن تكون أقل من صفر'] // التحقق من الكمية
    },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true }, // رابط Cloudinary
    cloudinaryId: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
