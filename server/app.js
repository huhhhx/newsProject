var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRouter = require('./routes/admin/UserRouter');
const NewsRouter = require('./routes/admin/NewsRouter');
const ProductRouter = require('./routes/admin/ProductRouter');
const webNewsRouter = require('./routes/web/NewsRoute');

const webProductRouter = require('./routes/web/ProductRoute');
const JWT = require('./utils/JWT');

// require('./config/db.config');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// adminapi 后台系统用的接口
// webapi 企业官网用的接口
app.use(webNewsRouter);
app.use(webProductRouter);

// 中间件 路由之前处理请求  统一处理请求、
app.use((req, res, next) => {
  // 如果token有效，放行，next()
  // 如果token过期了，返回401错误
  if (req.url === '/adminapi/user/login') {
    //首次登录，直接放行
    next();
    return;
  }
  console.log('req.header', req.header);
  const token = req.headers['authorization'].split(' ')[1];
  if (token) {
    const payload = JWT.verify(token);
    console.log('更新token，token is：', payload);
    if (payload) {
      // token没有过期 访问一次就要嘛刷新一下token
      const newToken = JWT.generate(
        {
          _id: payload._id,
          username: payload.username,
        },
        '1d'
      );
      console.log('res.header', res.header);
      res.header('Authorization', newToken);
      next();
    } else {
      //token 过期
      res.status(401).send({ errCode: '-1', errorInfo: 'token 过期了' });
    }
  }
});
//这里应用路由   后台需要应用token进行校验的路由放在这里
app.use(UserRouter);
app.use(NewsRouter);
app.use(ProductRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
