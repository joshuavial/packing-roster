var express = require('express');
var router = express.Router();

var PackingEvent = require('../models/packingEvent')

/* GET home page. */
router.get('/packing_events', function(req, res, next) {
  PackingEvent.find(function(err, events) {
    res.json(events)
  })
});

router.get('/packing_events/:id', function(req, res, next) {
  PackingEvent.find({_id: req.params.id},function(err, events) {
    var event = {}
    if (events) {event = events[0]}
    res.json(event)
  })
});

router.post('/packing_events/', function(req, res, next) {
  PackingEvent.create(req.body ,function(err, event) {
    res.json(event)
  })
});

router.delete('/packing_events/', function(req, res, next) {
  PackingEvent.remove(function(err, thing) {
    res.json('success')
  })
});

module.exports = router;
