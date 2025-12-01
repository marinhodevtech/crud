const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/products', productRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'API is running' });
});

module.exports = app;
