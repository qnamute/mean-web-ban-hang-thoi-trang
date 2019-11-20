const express = require('express');
const router = express.Router();
const ProductImageController = require('../controllers/productimages');

router.get('/:productId', ProductImageController.productimages_get_productimagebyproductid);

router.post('/', ProductImageController.productimages_create_imageproduct);

router.delete('/:productId', ProductImageController.productimages_deletebyproductid);

router.delete('/:productImageId', ProductImageController.productimages_deletebyid);

module.exports = router;