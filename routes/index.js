var express = require('express');
var router = express.Router();

/* dashboard */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DashBoard' })
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' })
})


router.get('/chart_daily', (req, res) => {
  res.render('chart_daily', { title: '1일데이타' })
})


router.get('/chart_monthly', (req, res) => {
  res.render('chart_monthly', { title: '1달 데이타' })
})


router.get('/chart_effective', (req, res) => {
  res.render('chart_effective', { title: '효율' })
})


router.get('/chart_isp', (req, res) => {
  res.render('chart_isp', { title: 'ISP별' })
})


module.exports = router;
