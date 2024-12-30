const express = require('express');
const router = express.Router();

// Import your Movie model
const Movie = require('../models/Movie.Model');

// Route to list all movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find(); // Fetch all movies from the database
    res.render('movies', { movies }); // Render the movies.hbs template
  } catch (error) {
    console.error('Error retrieving movies:', error);
    next(error);
  }
});

module.exports = router;
