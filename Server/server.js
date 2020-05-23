const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

/**
 * impot routes
 */
const studentsRouter = require('./routes/students');
const teachersRouter = require('./routes/teachers');
const examsRouter = require('./routes/exams/exams');
const attenceRouter = require('./routes/attendance');
const gradeRouter = require('./routes/exams/grade');

//init the app
const app = express();
app.use(express.json());
app.use(morgan('dev'));

const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });


//routes
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/exams', examsRouter);
app.use('/attendance', attenceRouter);
app.use('/grades', gradeRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Connected Successfully ${port}`));