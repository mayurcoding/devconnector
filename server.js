const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app .use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;

//Connnect to MongoDB
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) =>  res.send('Heloo Mayur !'));

// user Routes

app.use('/api/users', users);
app.use('/api/users', profile);
app.use('/api/users', posts);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));