const express = require('express')
const app = express()
const router = express.Router()

const Car = require('../models/car.models')

app.use(express.json())

router.get('/',async (req, res) =>{
    try {
        const register = await Car.find()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/:id',async (req, res) =>{
    try {
        const register = await Car.findById(req.params.id)
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.post('/',async (req,res) => {
    const user = new Car({
        image:req.body.image,
        date:req.body.date,
        location:req.body.location,
        brand:req.body.brand,
        price:req.body.price
    })

    try {
        const register = await user.save()
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.put('/:id',async (req,res) =>{
    try {
        const register = await Car.findById(req.params.id)
        register.image = req.body.image
        register.date = req.body.date
        register.location = req.body.location
        register.brand = req.body.brand
        register.price = req.body.price

        const response = await register.save()

        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/:id',async (req,res) =>{
    try {
        const register = await Car.findById(req.params.id)
        const response = await register.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router

