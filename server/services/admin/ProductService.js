const ProductModel = require('../../models/ProductModel');
// 把前端整合的数据拿来直接操作数据库
const ProductService = {
  add: async ({ title, introduction, detail, cover, editTime }) => {
    return ProductModel.create({
      title,
      introduction,
      detail,
      cover,
      editTime,
    });
  },
  getlist: async ({ _id }) => {
    return _id ? ProductModel.find({ _id }) : ProductModel.find({});
  },
  // publish: async ({ _id, ispublish, editTime }) => {
  //   return ProductModel.updateOne(
  //     {
  //       _id,
  //     },
  //     {
  //       ispublish,
  //       editTime,
  //     }
  //   );
  // },
  dellist: async ({ _id }) => {
    return ProductModel.deleteOne({ _id });
  },
  updatelist: async ({ _id, title, introduction, detail, cover, editTime }) => {
    if (cover) {
      return ProductModel.updateOne(
        { _id },
        {
          title,
          introduction,
          detail,
          cover,
          editTime,
        }
      );
    } else {
      return ProductModel.updateOne(
        { _id },
        {
          title,
          introduction,
          detail,
          editTime,
        }
      );
    }
  },
};
module.exports = ProductService;
