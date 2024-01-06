const NewsService = require('../../services/admin/NewsService');
// controller 处理和整合前端数据
const NewsController = {
  add: async (req, res) => {
    const cover = req.file ? `/newsuploads/${req.file.filename}` : '';
    const { title, content, category, ispublish } = req.body;

    await NewsService.add({
      title,
      content,
      category: Number(category),
      ispublish: Number(ispublish),
      cover,
      editTime: new Date(),
    });
    res.send({
      msg: 'news的add controller 返回了',
    });
  },
  getlist: async (req, res) => {
    const result = await NewsService.getlist({ _id: req.params.id });
    res.send({
      msg: 'news的getlist controller 返回了',
      data: result,
    });
  },
  publish: async (req, res) => {
    await NewsService.publish({
      ...req.body,
      editTime: new Date(),
    });
    res.send({
      msg: 'news的publish controller 返回了',
    });
  },
  dellist: async (req, res) => {
    await NewsService.dellist({ _id: req.params.id });
    res.send({
      msg: 'news的dellist controller 返回了',
    });
  },
  updatelist: async (req, res) => {
    const cover = req.file ? `/newsuploads/${req.file.filename}` : '';
    const { title, content, category, ispublish, _id } = req.body;

    await NewsService.updatelist({
      _id,
      title,
      content,
      category: Number(category),
      ispublish: Number(ispublish),
      cover,
      editTime: new Date(),
    });
    res.send({
      msg: 'news的updatelist controller 返回了',
    });
  },
};
module.exports = NewsController;
