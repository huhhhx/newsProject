const jsonwebtoken = require('jsonwebtoken');
// 私钥
const secret = 'hello';
const JWT = {
  //后端生成token  对value加密 exprires  token的保存时间
  generate(value, exprires) {
    return jsonwebtoken.sign(value, secret, { expiresIn: exprires });
  },
  verify(token) {
    try {
      return jsonwebtoken.verify(token, secret);
    } catch (e) {
      return false;
    }
  },
};
module.exports = JWT;
