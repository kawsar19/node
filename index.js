const express = require('express');
const app = express();
app.use(express.static('public'))
//index.js
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  })
app.get('/hello', (req, res) => {
    res.send("hllwo ");
  })

app.listen(process.env.PORT || 3000);