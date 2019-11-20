const mongoose = require('mongoose');
const ProductImage = require('../models/productimage');
const Product = require('../models/product');

exports.productimages_get_productimagebyproductid = (req, res, next) => {
    Product.find({
        _id: req.body.productId
    })
        .exec()
        .then(docs => {
            x
            const response = {
                count: docs.length,
                productImages: docs.map(doc => {
                    return {
                        _id: doc.image._id,
                        url: doc.image.url,
                        altImage: doc.image.altImage
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                })
        });
}

exports.productimages_create_imageproduct = (req, res, next) => {
    const productImage = new ProductImage({
        _id: new mongoose.Types.ObjectId,
        url: req.body.url,
        altImage: req.body.altImage
    });
    productImage.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Add product image successfully',
                createProductImage: {
                    _id: result._id,
                    url: result.url,
                    altImage: result.altImage,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8001/productimages/' + result._id
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            response.status(500).json({
                error: err
            });
        });
}


exports.productimages_deletebyproductid = (req, res, next) => {
    Product.find({
        _id: req.body.productId
    })
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                productImages: docs.map(doc => {
                    ProductImage.remove({
                        _id: doc.image._id
                    })
                        .exec()
                        .then(result => {
                            console.log(result);

                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                            return;
                        })
                })
            }
        })
}

exports.productimages_deletebyid = (req, res, next) => {
    const id = req.params.productImageId;
    ProductImage.remove({
        _id: id
    })
        .exec()
        .then(result => {
            res.status(200).json({
                messagae: "Image deleted",
                request: {
                    type: 'GET',
                    url: "hthttp://localhost:8001/products"
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}