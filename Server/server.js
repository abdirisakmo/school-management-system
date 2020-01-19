const express = require('express');
const mongoose = require('mongoose');

const students = require('./routes/api/students');

//init the app
const app = express();

//connect to the database
mongoose.connect('mongodb://localhost/schoolmanagementsystem', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection failed'));
db.once('open', () => console.log('sacsessfully connected'));


//routes
app.use('/api/students', students);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`School Management System ${port}`));