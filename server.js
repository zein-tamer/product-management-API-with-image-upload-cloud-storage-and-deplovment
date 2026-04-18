const dotenv = require('dotenv');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const connectDB = require('./config/dbConn');

const app = express();
const PORT = process.env.PORT || 3000;


// Connect to MongoDB
connectDB();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('API is running successfully!');
});


// routes
app.use('/product', require('./routes/product'));


// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        success: false,
        message: err.message || 'Server Error'
    });
});



mongoose.connection.once('open',()=>{
    console.log('✅ MongoDB Connected Successfully')
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

})
