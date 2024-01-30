require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const gameRouter = require('./routes/gameRouter');

//creating the express app
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log('The request path is ' + req.path);
    console.log('The request method is ' + req.method);
    next();
})

//enabling routing
app.use('/users', userRouter);
app.use('/games', gameRouter);

//connecting to mongoDB
mongoose.connect(process.env.MNG_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port " + process.env.PORT);
        })
    })
    .catch((err) => {
        console.log(err);
    })

