var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('http://zhangweijie.cn');
});

router.get('/mx4', function (req, res) {
    res.redirect('http://widget.weibo.com/dialog/PublishWeb.php?mid=&default_text=&language=zh_cn&app_src=503Oti&button=publish&re');
})
module.exports = router;
