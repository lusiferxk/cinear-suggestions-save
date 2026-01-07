const Suggestion = require('../models/Suggestion')

// Create a new suggestion
exports.createSuggestion = async (req, res) => {
  try {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    const suggestion = new Suggestion({ message })
    await suggestion.save()

    res.status(201).json({
      success: true,
      data: suggestion
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

// Get all suggestions
exports.getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: suggestions.length,
      data: suggestions
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

// Get a single suggestion by ID
exports.getSuggestionById = async (req, res) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id)

    if (!suggestion) {
      return res.status(404).json({
        success: false,
        error: 'Suggestion not found'
      })
    }

    res.status(200).json({
      success: true,
      data: suggestion
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

// Update a suggestion
exports.updateSuggestion = async (req, res) => {
  try {
    const { message } = req.body

    const suggestion = await Suggestion.findByIdAndUpdate(
      req.params.id,
      { message },
      { new: true, runValidators: true }
    )

    if (!suggestion) {
      return res.status(404).json({
        success: false,
        error: 'Suggestion not found'
      })
    }

    res.status(200).json({
      success: true,
      data: suggestion
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}

// Delete a suggestion
exports.deleteSuggestion = async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndDelete(req.params.id)

    if (!suggestion) {
      return res.status(404).json({
        success: false,
        error: 'Suggestion not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'Suggestion deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
