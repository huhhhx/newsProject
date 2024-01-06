const NewsService = require('../../services/web/NewsService');
// controller 处理和整合前端数据
const NewsController = {
  getlist: async (req, res) => {
    const result = await NewsService.getlist({ _id: req.params.id });
    res.send({
      msg: 'webnews的getlist controller 返回了',
      data: result,
    });
  },
  gettoplist: async (req, res) => {
    const result = await NewsService.gettoplist({ limit: req.query.limit });
    res.send({
      msg: 'webnews的getlist controller 返回了',
      data: result,
    });
  },
};
module.exports = NewsController;
