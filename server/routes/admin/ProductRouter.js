var express = require('express');
var ProductRouter = express.Router();
const ProductController = require('../../controllers/admin/ProductController');

// 涉及文件上传，普通post不行，需要加上multer中间件
// 图片上传到服务器
const multer = require('multer');
// 把前端上传的文件存在public文件下的avataruploads
const upload = multer({ dest: 'public/productuploads/' });
// upload.single("file")这里是局部中间件  先把file字段拿了
ProductRouter.post(
  '/adminapi/product/add',
  upload.single('file'),
  ProductController.add
);

ProductRouter.get('/adminapi/product/list', ProductController.getlist);
// // 新闻发布接口
// ProductRouter.put('/adminapi/news/publish', ProductController.publish);
// 删除产品的接口
ProductRouter.delete('/adminapi/product/list/:id', ProductController.dellist);
// // 编辑对象，获取即将编辑产品的接口
ProductRouter.get('/adminapi/product/list/:id', ProductController.getlist);
// 更新产品
ProductRouter.post(
  '/adminapi/product/list',
  upload.single('file'),
  ProductController.updatelist
);
module.exports = ProductRouter;
