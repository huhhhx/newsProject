const UserService = require('../../services/admin/UserService');
const JWT = require('../../utils/JWT');
const UserController = {
  login: async (req, res) => {
    const result = await UserService.login(req.body);
    if (result.length == 0) {
      res.send({
        code: '-1',
        error: '用户名密码不匹配',
      });
    } else {
      //生成token
      const token = JWT.generate(
        {
          _id: result[0]._id,
          username: result[0].username,
        },
        '1d'
      );
      res.header('Authorization', token);
      res.send({
        ActionType: 'ok',
        data: {
          username: result[0].username,
          gender: result[0].gender ? result[0].gender : 0,
          introduction: result[0].introduction,
          avatar: result[0].avatar,
          role: result[0].role,
        },
      });
    }
  },
  // express 无法直接处理前端传来的formData，需要借助multer工具
  // Multer是一个用于处理的node.js中间件multipart/form-data，主要用于上传文件。
  upload: async (req, res) => {
    console.log('body', req.body, 'file', req.file);
    console.log('收到更新的请求和数据了');
    const { username, introduction, gender } = req.body;
    const token = req.headers['authorization'].split(' ')[1];
    // 传过来的file可能为空
    const avatar = req.file ? `/avataruploads/${req.file.filename}` : '';
    const payload = JWT.verify(token);
    console.log('我要去更新' + payload + '的数据了');

    // 调用service模块 更新数据
    const result = await UserService.upload({
      _id: payload._id,
      username,
      introduction,
      gender: Number(gender),
      avatar,
    });
    if (avatar) {
      res.send({
        message: 'ok',
        data: {
          username,
          introduction,
          gender: Number(gender),
          avatar,
        },
      });
    } else {
      res.send({
        message: 'ok',
        data: {
          username,
          introduction,
          gender: Number(gender),
        },
      });
    }
  },
  add: async (req, res) => {
    const { username, introduction, gender, role, password } = req.body;
    // 传过来的file可能为空
    const avatar = req.file ? `/avataruploads/${req.file.filename}` : '';

    // 调用service模块 更新数据
    const result = await UserService.add({
      username,
      introduction,
      password,
      gender: Number(gender),
      role: Number(role),
      avatar,
    });
    res.send({
      message: 'ok',
      result,
    });
  },
  getlist: async (req, res) => {
    const result = await UserService.getlist(req.params);
    res.send({
      message: 'ok',
      data: result,
    });
  },
  dellist: async (req, res) => {
    console.log('即将删除的用户id', req.params.id);
    const result = await UserService.dellist({ _id: req.params.id });
    res.send({
      message: 'ok',
      result,
    });
  },
  putlist: async (req, res) => {
    // console.log('处理编辑后台', req);
    const result = await UserService.putlist(req.body);
    res.send({
      message: 'ok',
      data: result,
      msg: '编辑信息处',
    });
  },
};

module.exports = UserController;
