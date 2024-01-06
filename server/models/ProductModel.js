const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
//news模型 ====>news集合
const ProductType = {
  title: String,
  introduction: String,
  detail: String,
  cover: String, //封面
  editTime: Date,
};
const ProductModel = mongoose.model('product', new Scheme(ProductType));

module.exports = ProductModel;
