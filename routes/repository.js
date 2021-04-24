var express = require('express');
var router = express.Router();

var pgDBConn = require('./pgDBConn');
const pool = pgDBConn.getClient();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(404).json({"msessage": "잘못된 접근입니다"});
});


router.get('daily', (req, res) => {
  let query = 'SELECT update_time,cdn,p2p FROM web.dn_day\n' +
      'WHERE update_time >\'2021-04-22 00:00\' \n' +
      'AND update_time <\'2021-04-23 00:05\'\n' +
      'AND content_id = 1\n' +
      'ORDER BY update_time ASC';
  pool.query(query, (error, results) => {
    if (error) {
      throw Error;
    }
    res.status(200).json(results.rows);
  })
})


router.get('monthly', (req, res) => {
  let query = 'SELECT update_date, cdn, p2p FROM web.dn_month\n' +
      'WHERE update_date >= \'2021-04-01\' \n' +
      'AND update_date < \'2021-05-01\'\n' +
      'AND content_id = 0\n' +
      'ORDER BY update_date ASC';
  pool.query(query, (error, results) => {
    if (error) {
      throw Error;
    }
    res.status(200).json(results.rows);
  })
})


router.get('effective', (req, res) => {
  let query = 'SELECT update_time, ((cdn*100)/(cdn+p2p))::integer FROM web.dn_day\n' +
      'WHERE update_time >\'2021-04-22 00:00\' \n' +
      'AND update_time <\'2021-04-23 00:05\'\n' +
      'AND content_id = 1\n' +
      'ORDER BY update_time ASC';
  pool.query(query, (error, results) => {
    if (error) {
      throw Error;
    }
    res.status(200).json(results.rows);
  })
})


router.get('isp', (req, res) => {

  const query = 'SELECT update_time, kt, sk, lg, etc  FROM web.isp_day\n' +
      'WHERE update_time >\'2021-04-22 00:00\' \n' +
      'AND update_time <\'2021-04-23 00:05\'\n' +
      'AND owner_isp = \'0\'\n' +
      'AND content_id = 0\n' +
      'ORDER BY update_time ASC';

  pool.query(query, (error, results) => {
    if (error) {
      throw Error;
    }
    res.status(200).json(results.rows);
  })
})


module.exports = router;
