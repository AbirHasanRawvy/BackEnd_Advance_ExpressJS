const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

//! Create new product API;
router.post("/create-product", productController.createProduct);

module.export = router;