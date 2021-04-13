const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3002;

require('./api/Models/database');

var cors=require('cors');
app.use(cors({origin:true,credentials: true}));

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', require('./api/Routes/user')(express));

module.exports = app;


// sudo killall -9 node