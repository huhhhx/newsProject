var express = require('express');
var NewsRouter = express.Router();
const NewsController = require('../../controllers/web/NewsController');

NewsRouter.get('/webapi/news/list', NewsController.getlist);
NewsRouter.get('/webapi/news/list/:id', NewsController.getlist);
NewsRouter.get('/webapi/news/toplist', NewsController.gettoplist);

module.exports = NewsRouter;
