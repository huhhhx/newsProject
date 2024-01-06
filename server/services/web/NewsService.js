const NewsModel = require('../../models/NewsModel');
const NewsService = {
  getlist: async ({ _id }) => {
    return _id
      ? NewsModel.find({ _id, ispublish: 1 })
      : NewsModel.find({ ispublish: 1 }).sort({ editTime: -1 }); //倒序排序，最新发布的放在最前面
  },
  gettoplist: async ({ limit }) => {
    return NewsModel.find({ ispublish: 1 }).sort({ editTime: -1 }).limit(limit);
  },
};
module.exports = NewsService;
