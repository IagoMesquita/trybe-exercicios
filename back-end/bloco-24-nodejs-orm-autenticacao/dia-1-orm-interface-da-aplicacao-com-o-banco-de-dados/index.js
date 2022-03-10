const express = require('express');
const bodyParser = require('body-parser');

const bookController = require('./controllers/bookController');

const app = express();

app.use(bodyParser.json());



app.use('/books', bookController);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}!`);
})