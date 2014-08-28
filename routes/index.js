var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/mx4', function (req, res) {
    res.render('mx4')
})
module.exports = router;
