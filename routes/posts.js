const express = require('express')
const app = express()
const router = express.Router()
const Posts = require('../models/posts.models')

app.use(express.json())

router.get('/',async (req, res) =>{
    try {
        const posts = await Posts.find()
        res.json(posts)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/:id',async (req, res) =>{
    try {
        const post = await Posts.findById(req.params.id)
        res.json(post)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.get('/:email/:password',async (req, res) =>{
    try {
        const register = await Posts.findOne({ email: req.params.email, password: req.params.password })
        res.json(register)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.post('/',async (req,res) => {
    const posts = new Posts({
        fullname:req.body.fullname,
        username:req.body.username,
        password:req.body.password
    })

    try {
        const post = await posts.save()
        res.send(post)
        //res.json(post)
    }catch (error) {
        res.send('Error : '+error)
    }

})

router.put('/:id',async (req,res) =>{
    try {
        const post = await Posts.findById(req.params.id)
        post.fullname = req.body.fullname
        post.username = req.body.username
        post.password = req.body.password

        const response = await post.save()

        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

router.delete('/:id',async (req,res) =>{
    try {
        const post = await Posts.findById(req.params.id)
        const response = await post.remove()
        res.json(response)
    }catch (error) {
        res.send('Error : '+error)
    }
})

module.exports = router