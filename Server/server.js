const express = require('express');
const mongoose = require('mongoose');

const students = require('./routes/students');

//init the app
const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });


//routes
app.use('/students', students);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`School Management System ${port}`));