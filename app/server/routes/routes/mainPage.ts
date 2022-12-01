import express from 'express';

const mainPage = express.Router();

mainPage.get('/', (req, res) => {
  res.send(`Hello from ${req.baseUrl}`);
});

export default mainPage;
