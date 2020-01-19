const express = require('express');


//init the app
const app = express();


const port = 5000;
app.get('/', (req, res) => res.send('<h2>hello world</h2>'))

app.listen(port, () => console.log(`School Management System ${port}`));