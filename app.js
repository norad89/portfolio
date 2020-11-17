import express from 'express';
const app = express();
const port = 3000;

app.use('/', express.static('public'))

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('Now what?');
  });
  
app.listen(port, () => {
    console.log(`Portfolio listening at http://localhost:${port}`)
  })