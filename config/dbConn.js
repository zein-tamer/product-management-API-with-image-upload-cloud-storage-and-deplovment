const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // استخدم DATABASE_URI الذي وضعناه في إعدادات Render
        const uri = process.env.DATABASE_URI;
        
        if (!uri) {
            throw new Error("رابط قاعدة البيانات (DATABASE_URI) غير معرف في Render!");
        }

        await mongoose.connect(uri);
        console.log('✅ MongoDB Connected Successfully to Cloud Atlas');
    } catch (err) {
        console.error('❌ Error connecting to mongoDB:', err.message);
        process.exit(1); 
    }
}

module.exports = connectDB;
