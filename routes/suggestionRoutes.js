const express = require('express')
const router = express.Router()
const {
  createSuggestion,
  getAllSuggestions,
  getSuggestionById,
  updateSuggestion,
  deleteSuggestion
} = require('../controller/suggestionController')

router.post('/', createSuggestion)
router.get('/', getAllSuggestions)
router.get('/:id', getSuggestionById)
router.put('/:id', updateSuggestion)
router.delete('/:id', deleteSuggestion)

module.exports = router
