const express = require('express');
const PORT = 5000
const app = express();
app.get('/', (req, res) => {
  res.send({hello: 'Hello World!'})
})
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});