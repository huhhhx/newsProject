const UserModel = require('../../models/UserModel');

const UserService = {
  login: async ({ username, password }) => {
    // console.log(UserModel.find({ username, password }));
    return UserModel.find({ username, password });
  },
  upload: async ({ _id, username, introduction, gender, avatar }) => {
    if (avatar) {
      // 判断是否存在头像数据
      // 联通数据库进行数据更新
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
          avatar,
        }
      );
    } else {
      return UserModel.updateOne(
        {
          _id,
        },
        {
          username,
          introduction,
          gender,
        }
      );
    }
  },
  add: async ({ username, introduction, gender, avatar, password, role }) => {
    return UserModel.create({
      username,
      introduction,
      gender,
      avatar,
      password,
      role,
    });
  },
  getlist: async ({ id }) => {
    return id
      ? UserModel.find({ _id: id }, [
          'username',
          'role',
          'introduction',
          'password',
        ])
      : UserModel.find({}, [
          'username',
          'role',
          'avatar',
          'gender',
          'introduction',
        ]);
  },
  dellist: async ({ _id }) => {
    return UserModel.deleteOne({ _id });
  },
  putlist: async (body) => {
    return UserModel.updateOne({ _id: body._id }, body);
  },
};
module.exports = UserService;
