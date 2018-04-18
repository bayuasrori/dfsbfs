var express = require('express');
var router = express.Router();
const main = require('../controllers/main');
const dfs = require('../controllers/dfs');
const bfs = require('../controllers/bfs');
/* GET home page. */
router.get('/', main.index);
router.post('/dfs', dfs.reqDFS);
router.post('/bfs', bfs.reqBFS);
module.exports = router;
