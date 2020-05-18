const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

/**
 * impot routes
 */
const students = require('./routes/students');
const teachers = require('./routes/teachers');
const exams = require('./routes/exams');

//init the app
const app = express();
app.use(express.json());
app.use(morgan('dev'));

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });


//routes
app.use('/students', students);
app.use('/teachers', teachers);
app.use('/exams', exams);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Connected Successfully ${port}`));