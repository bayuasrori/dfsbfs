var express = require('express');
var router = express.Router();
const main = require('../controllers/main');
const dfs = require('../controllers/dfs');
/* GET home page. */
router.get('/', main.index);
router.post('/dfs', dfs.reqDFS);
module.exports = router;
