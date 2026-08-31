const express = require('express');
const app = express();
const port = process.env.POR""23000;

app.get('/', (req, res) => {
  res.send('<h1> CI/CD Demo Works!</h1><p>Deployed from VS Code via GitHub Actions to Azure</p>');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
}); 
