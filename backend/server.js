import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/product/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Server is running of port ${port}`);
});
