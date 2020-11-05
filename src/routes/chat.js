var express = require('express');
var router = express.Router();
const controller = require("../controllers/chatcontroller");
/* GET generated chat. */

router.get('/new', controller.requestChat);

module.exports = router;
