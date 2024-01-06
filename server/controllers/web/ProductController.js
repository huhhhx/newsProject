const ProductService = require('../../services/web/ProductService');
// controller 处理和整合前端数据
const ProductController = {
  getlist: async (req, res) => {
    const result = await ProductService.getlist();
    res.send({
      msg: 'webnews的getlist controller 返回了',
      data: result,
    });
  },
};
module.exports = ProductController;
