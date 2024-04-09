// --- imports packages ---
const express = require('express')
const productsRouter = express.Router()

// import middleware
const { isAdmin } = require('../middlewares/auth.middleware')

// import Controller
const { getProducts, saveProduct, deleteProduct, updateProduct } = require('../controllers/products.controllers.js');

// Methods
productsRouter.get('/', getProducts);


productsRouter.post('/', isAdmin, saveProduct)

productsRouter.delete('/:id', isAdmin, deleteProduct)

productsRouter.put('/:id', isAdmin, updateProduct)

// exports
module.exports = {
    productsRouter,
}