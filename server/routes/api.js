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
    res.json(events)
  })
});

router.post('/packing_events/', function(req, res, next) {
  PackingEvent.create(req.body ,function(err, event) {
    res.json(event)
  })
});

router.delete('/packing_events/', function(req, res, next) {
  PackingEvent.remove(function(err, thing) {
    res.json(thing)
  })
});

module.exports = router;
