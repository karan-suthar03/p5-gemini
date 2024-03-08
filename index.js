const express = require('express');
const app = express();
const port = 3000;
const gemini = require('./gemini.js')(process.env.GENERATIVE_API_KEY);

app.use(express.json());
app.use(express.static('public'));
app.use('/gemini', gemini);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});