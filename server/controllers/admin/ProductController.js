const productService = require('../../services/admin/ProductService');
// controller 处理和整合前端数据
const productController = {
  add: async (req, res) => {
    const cover = req.file ? `/productuploads/${req.file.filename}` : '';
    const { title, introduction, detail } = req.body;

    await productService.add({
      title,
      introduction,
      detail,
      cover,
      editTime: new Date(),
    });
    res.send({
      msg: 'product的add controller 返回了',
    });
  },
  getlist: async (req, res) => {
    const result = await productService.getlist({ _id: req.params.id });
    res.send({
      msg: 'product的getlist controller 返回了',
      data: result,
    });
  },
  // publish: async (req, res) => {
  //   await productService.publish({
  //     ...req.body,
  //     editTime: new Date(),
  //   });
  //   res.send({
  //     msg: 'product的publish controller 返回了',
  //   });
  // },
  dellist: async (req, res) => {
    await productService.dellist({ _id: req.params.id });
    res.send({
      msg: 'product的dellist controller 返回了',
    });
  },
  updatelist: async (req, res) => {
    const cover = req.file ? `/productuploads/${req.file.filename}` : '';
    const { title, introduction, detail, _id } = req.body;

    await productService.updatelist({
      _id,
      title,
      introduction,
      detail,
      cover,
      editTime: new Date(),
    });
    res.send({
      msg: 'product的updatelist controller 返回了',
    });
  },
};
module.exports = productController;
