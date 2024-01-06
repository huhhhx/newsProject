var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controllers/admin/UserController');
// 图片上传到服务器
const multer = require('multer');
// 把前端上传的文件存在public文件下的avataruploads
const upload = multer({ dest: 'public/avataruploads/' });
/* GET home page. */
UserRouter.post('/adminapi/user/login', UserController.login); //登录接口
UserRouter.post(
  '/adminapi/user/upload',
  upload.single('file'),
  UserController.upload
); //修改用户信息接口

//添加用户信息接口
UserRouter.post(
  '/adminapi/user/add',
  upload.single('file'),
  UserController.add
);
//展示用户列表信息接口
UserRouter.get('/adminapi/user/list', UserController.getlist);
//实现用户增删改查
UserRouter.delete('/adminapi/user/list/:id', UserController.dellist);
UserRouter.get('/adminapi/user/list/:id', UserController.getlist);
UserRouter.put('/adminapi/user/list/:id', UserController.putlist);
module.exports = UserRouter;
