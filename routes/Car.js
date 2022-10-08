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
        brand:req.body.brand,
        fuelType:req.body.fuelType,
        seats:req.body.seats,
        transmissionType:req.body.transmissionType,
        price:req.body.price,
        distance:req.body.distance
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
        register.brand = req.body.brand
        register.fuelType = req.body.fuelType
        register.seats = req.body.seats
        register.transmissionType = req.body.transmissionType
        register.price = req.body.price
        register.distance = req.body.distance
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

