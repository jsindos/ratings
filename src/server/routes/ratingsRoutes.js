const express = require('express');
const { Reviews } = require('../db').models;

const router = express.Router();

router.post('/submit-rating', async (req, res) => {
  const { rating, comment } = req.body;

  try {
    const newReview = await Reviews.create({
      rating,
      content: comment
    });

    await newReview.save();
    res.status(201).json({ message: 'Rating submitted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error submitting rating', error: error.message });
  }
});

module.exports = router;
