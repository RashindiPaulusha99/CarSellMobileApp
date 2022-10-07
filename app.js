const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

const app=express()
const port = 4002

const url = 'mongodb://127.0.0.1/carSellMobileApp'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.use('/user', user)

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})