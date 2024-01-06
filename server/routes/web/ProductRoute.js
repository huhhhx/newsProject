var express = require('express');
var ProductRouter = express.Router();
const ProductController = require('../../controllers/web/ProductController');

ProductRouter.get('/webapi/product/list', ProductController.getlist);

module.exports = ProductRouter;
