var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/admin/NewsController');

// 涉及文件上传，普通post不行，需要加上multer中间件
// 图片上传到服务器
const multer = require('multer');
// 把前端上传的文件存在public文件下的avataruploads
const upload = multer({ dest: 'public/newsuploads/' });
// upload.single("file")这里是局部中间件  先把file字段拿了
NewsRouter.post(
  '/adminapi/news/add',
  upload.single('file'),
  NewsController.add
);
NewsRouter.get('/adminapi/news/list', NewsController.getlist);
// 新闻发布接口
NewsRouter.put('/adminapi/news/publish', NewsController.publish);
// 删除新闻的接口
NewsRouter.delete('/adminapi/news/list/:id', NewsController.dellist);
// 编辑对象，获取即将编辑新闻的接口
NewsRouter.get('/adminapi/news/list/:id', NewsController.getlist);
// 更新新闻
NewsRouter.post(
  '/adminapi/news/list',
  upload.single('file'),
  NewsController.updatelist
);
module.exports = NewsRouter;
