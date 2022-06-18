const express = require('express')
const router = express.Router()
const User = require('../models/user')

// //Create a User
// router.post('/', async (req, res) => {
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password
//     })
  
//     try {
//         const newUser = await user.save()
//         res.status(201).json(newUser)
//     } catch (err){
//         res.status(400).json({message: err.message})
//     }
//   })
/**
 * @swagger
 * tags:
 * name: User
 * /user:
 * get:
 * tags: [User]
 */
// Retrieve all users
router.get('/', async (req, res) => {
try {
    const user = await User.find()
    res.json(user)
} catch (err) {
    res.status(500).json({ message: err.message})
}
})

// Modify a user
router.put('/:id', getUser, async (req, res) => {
    if (req.body.email != null){
        res.user.email = req.body.email
    }
    if (req.body.password != null){
      res.user.password = req.body.password
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err){
        res.status(400).json({message: err.message})
    }
  })
  
//Delete A User
router.delete('/:id', getUser, async (req, res) => {
try {
    await res.user.remove()
    res.json({message: "Deleted User"})
} catch (err) {
    res.status(500).json({message: err.message})
}
})
  
async function getUser(req, res, next) {
let user;
try {
    user = await User.findById(req.params.id)
    if (user == null) {
        return res.status(404).json({message: 'Cannot find User'})
    }
} catch (err){
    return res.status(500).json({message: err.message})
}
res.user = user
next()
}

module.exports = router;