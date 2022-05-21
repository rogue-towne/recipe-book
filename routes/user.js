const express = require('express')
const router = express.Router()
const User = require('../models/user')

//Create a User
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
  
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err){
        res.status(400).json({message: err.message})
    }
  })

router.get('/', async (req, res) => {
try {
    const user = await User.find()
    res.json(user)
} catch (err) {
    res.status(500).json({ message: err.message})
}
})

module.exports = router;