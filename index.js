/*
express(npm i express),
mongoose(npm i mongoose)
nodemon(npm i nodemon -g)
dotenv(npm i dotenv)
bodyphaser(npm i body-parser)
bcrypt(npm i bcrypt)
jsonwebtoken(npm i jsonwebtoken)
*/

const dotenv = require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


//import .env
require("dotenv").config();

//initialize port number
const PORT = process.env.PORT || 8080;

//use dependancies
app.use(cors());
//get json using bodyparser
app.use(bodyParser.json());

//connect mongo db options
const URI = process.env.MONGODB_URL;


//auth
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false, store: MongoStore.create({ mongoUrl: URI }), cookie: { secure: false, expires: new Date(Date.now() + 50000) }, maxAge: 10000 }));
app.use(passport.initialize());
app.use(passport.session());


//    1.20

mongoose.connect(URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {

    console.log('Connected to MongoDB!!!');

    app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
        routsInit(app, passport)
        googleAuth(passport)



    });
}).catch((error) => {
    console.log("Error Connecting MongoDb", error);
});




const db = mongoose.connection;

app.use('/auth', authRoutes);

app.use('/courses', courseRouter);
app.use('/tutorials', tutorialRouter);

app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.use('/TuteFiles', express.static(__dirname + '/TuteFiles'));



