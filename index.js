const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1> CI/CD Demo Works!</h1><p>Build in GitHub Actions. so no Azure needed</p>');
});

app.listen(3000);
