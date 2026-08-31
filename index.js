const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1> CI/CD Demo Works!</h1><p>Deployed from VS Code via GitHub Actions- No Azure needed</p>');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
}); 
