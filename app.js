const express = require('express');
const app = express();
const body_parser = require('body-parser');
app.listen(3000);
app.use(body_parser.json());
var markers = [
  {
    id: 111,
    name: 'red marker',
    expires: 7
  }
];

// app.get('/', (req, res)=>{
//   res.send({
//     result: 'Hello',
//     target: 'world',
//     people: 10
//   })
// });


app.get('/api/markers', (req, res)=>{
  res.send(markers);
});

app.post('/api/markers', (req, res)=>{
  console.log('req.body ===', req.body);
  res.send('todo');
});
