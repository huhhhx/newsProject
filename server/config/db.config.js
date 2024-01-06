const mongoose = require('mongoose');

//company-system数据库名字
mongoose.connect('mongodb://127.0.0.1:27017/company-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// 检查连接是否成功
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to the database');
});
