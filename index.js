/*
express(npm i express),
mongoose(npm i mongoose)
nodemon(npm i nodemon -g)
dotenv(npm i dotenv)
bodyphaser(npm i body-parser)
bcrypt(npm i bcrypt)
jsonwebtoken(npm i jsonwebtoken)
*/

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT || 3000; // Corrected the bitwise OR to logical OR
const app = express();

const userRoute = require('./routes/UserRoute');
const customerRoute = require('./routes/CustomerRoute');
const orderRoute = require('./routes/OrderRoute');
const productRoute = require('./routes/ProductRoute');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connect to MongoDB
const URI = process.env.MONGODB_URL;

mongoose.connect(URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`MongoDB Connected`);
            console.log(`Server Started & running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.get('/test-api', (req, res) => {
    return res.json({ 'message': 'Server Started!' });
});


app.use('/api/v1/users', userRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/products', productRoute);
app.use('/api/v1/customers', customerRoute);
