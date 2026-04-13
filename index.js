import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the Server v3 Version !' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});