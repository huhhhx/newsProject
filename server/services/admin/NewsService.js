const NewsModel = require('../../models/NewsModel');
// 把前端整合的数据拿来直接操作数据库
const NewsService = {
  add: async ({ title, content, category, ispublish, cover, editTime }) => {
    return NewsModel.create({
      title,
      content,
      category,
      ispublish,
      cover,
      editTime,
    });
  },
  getlist: async ({ _id }) => {
    return _id ? NewsModel.find({ _id }) : NewsModel.find({});
  },
  publish: async ({ _id, ispublish, editTime }) => {
    return NewsModel.updateOne(
      {
        _id,
      },
      {
        ispublish,
        editTime,
      }
    );
  },
  dellist: async ({ _id }) => {
    return NewsModel.deleteOne({ _id });
  },
  updatelist: async ({
    _id,
    title,
    content,
    category,
    ispublish,
    cover,
    editTime,
  }) => {
    if (cover) {
      return NewsModel.updateOne(
        { _id },
        {
          title,
          content,
          category,
          ispublish,
          cover,
          editTime,
        }
      );
    } else {
      return NewsModel.updateOne(
        { _id },
        {
          title,
          content,
          category,
          ispublish,
          editTime,
        }
      );
    }
  },
};
module.exports = NewsService;
