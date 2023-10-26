import express from 'express';
const app = express();
const PORT = 8084;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  return res.send('meow');
});