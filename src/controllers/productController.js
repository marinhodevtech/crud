const ProductModel = require('../models/productModel');

class ProductController {
    getAll(req, res) {
        try {
            const products = ProductModel.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching products', error: error.message });
        }
    }

    getById(req, res) {
        try {
            const product = ProductModel.findById(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching product', error: error.message });
        }
    }

    create(req, res) {
        try {
            const { name, price, description } = req.body;

            if (!name || !price) {
                return res.status(400).json({ message: 'Name and price are required' });
            }

            const newProduct = ProductModel.create({ name, price, description });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error creating product', error: error.message });
        }
    }

    update(req, res) {
        try {
            const updatedProduct = ProductModel.update(req.params.id, req.body);
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).json({ message: 'Error updating product', error: error.message });
        }
    }

    delete(req, res) {
        try {
            const success = ProductModel.delete(req.params.id);
            if (!success) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting product', error: error.message });
        }
    }
}

module.exports = new ProductController();
