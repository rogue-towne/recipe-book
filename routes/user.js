const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Retrieve all users
router.get('/', async (req, res) => {
try {
    const user = await User.find()
    res.json(user)
} catch (err) {
    res.status(500).json({ message: err.message})
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