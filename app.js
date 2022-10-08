const express = require('express')
const mongoose = require('mongoose')
const car = require('./routes/Car')
const posts = require('./routes/posts')

const app=express()
const port = 4000

const url = 'mongodb://127.0.0.1/carSellMobileApp'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/car', car)
app.use('/posts', posts)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})