const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

const users = require('./users.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/users', (req, res) => {
  res.json(
    users.results.map(({ login, name: { title, first, last } }) => ({
      id: login.uuid,
      name: `${title} ${first} ${last}`,
    })),
  );
});

app.get('/users/:id', (req, res) => {
  res.json(users.results.find((user) => user.login.uuid === req.params.id));
});

app.get('*', (req, res) => {
  res.send('<h3>404</h3>');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
