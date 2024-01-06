const ProductModel = require('../../models/ProductModel');
const ProductService = {
  getlist: async () => {
    return ProductModel.find(); //倒序排序，最新发布的放在最前面
  },
};
module.exports = ProductService;
