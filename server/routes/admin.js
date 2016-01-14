var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/admin', function(req, res, next){
    var admin = path.join(__dirname, "../../public/views/admin.html");
    res.sendFile(admin);
});

module.exports = router;