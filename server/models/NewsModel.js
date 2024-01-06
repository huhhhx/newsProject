const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
//news模型 ====>news集合
const NewsType = {
  title: String,
  content: String,
  category: Number, //类别 1,2,3
  cover: String, //封面
  ispublish: Number, //未发布，已发布
  editTime: Date,
};
const NewsModel = mongoose.model('news', new Scheme(NewsType));

module.exports = NewsModel;
