const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require("dotenv").config();
const  Users = require('./routes/users');
//json space
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 2);
app.use('/api', Users);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));
app.get('/api', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})