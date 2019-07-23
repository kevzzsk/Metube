const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// create express app
const app = express();

// bodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db,{useNewUrlParser:true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// use port 5000 or deployment port (heroku)
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}` ));

