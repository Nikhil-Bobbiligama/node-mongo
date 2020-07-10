const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedChannel: {
    type: String,
    required: false
  },
  subscribeDate: {
    type: Date,
    required: false,
    default: Date.now
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)