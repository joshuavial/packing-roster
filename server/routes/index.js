var express = require('express');
var router = express.Router();

var PackingEvent = require('../models/packingEvent')

/* GET home page. */
router.get('/', function(req, res, next) {
  //get all packingEvents
  packingEvents = PackingEvent.all()
  console.log(PackingEvent)
  console.log(packingEvents)
  res.render('index', { title: 'Express', packingEvents: packingEvents });
});

module.exports = router;
