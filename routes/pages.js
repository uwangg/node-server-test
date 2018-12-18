var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:idx', function(req, res, next) {
    const idx = req.params.idx;
    res.send(idx);
});

router.get('/dir', function(req, res, next) {
    res.send(__dirname);
});

module.exports = router;
