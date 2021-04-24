var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/s', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login.do', (req, res) => {
  res.render('login', { title: 'Login' })
})


router.get('/data1.do', (req, res) => {
  res.render('data1', { title: 'data1' })
})

module.exports = router;
