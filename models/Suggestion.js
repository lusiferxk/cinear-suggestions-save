const mongoose = require('mongoose')

const suggestionSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Suggestion', suggestionSchema)
