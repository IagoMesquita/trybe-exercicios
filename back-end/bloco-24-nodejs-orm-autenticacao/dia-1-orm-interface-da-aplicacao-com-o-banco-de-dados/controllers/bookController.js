const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();

    if(!books.length) return res.status(404).json({ message: 'Sem dados para retornar' })
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Alguma coisa deu errado!' })
  }
});

module.exports = router;