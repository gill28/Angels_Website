var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    var index = path.join(__dirname, "../../public/main.html");
    res.sendFile(index);
});

module.exports = router;