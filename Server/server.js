const express = require('express');
const mongoose = require('mongoose');

/**
 * impot routes
 */
const students = require('./routes/students');
const teachers = require('./routes/teachers');

//init the app
const app = express();
app.use(express.json());

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });


//routes
app.use('/students', students);
app.use('/teachers', teachers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`School Management System ${port}`));