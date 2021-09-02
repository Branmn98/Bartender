const mongoose = require('mongoose');
const mongodb = require('./config/keys');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

const orderController = require('./controllers/orderController');

app.use(express.static('public'));

app.use(express.json());

mongoose.connect(mongodb.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(port, () => {console.info("Server started");}))
    .catch((err) => console.log(err));


app.use('/Order', orderController);