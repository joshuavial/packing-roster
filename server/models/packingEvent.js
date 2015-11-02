var mongoose = require('../config/mongoose')

var PackingEventSchema = mongoose.Schema({
  title: String,
  date: Date,
  numberOfPackersRequired: Number
})

PackingEventSchema.methods.addPacker = function(packerName) {
  console.log(packerName)
}

var PackingEvent = mongoose.model('PackingEvent', PackingEventSchema)

module.exports = PackingEvent
