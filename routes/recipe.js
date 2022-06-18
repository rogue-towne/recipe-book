const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')
const { requiresAuth } = require('express-openid-connect');

//Create a Recipe
router.post('/',  requiresAuth(), async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        author: req.body.author,
        servings: req.body.servings,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    })
    try {
        const newRecipe = await recipe.save()
        res.status(201).json(newRecipe)
    } catch (err){
        res.status(401).json({message: err.message})
        res.status(503).json({message: err.message})
        res.status(400).json({message: err.message})
    }
  })

// Retrieve all recipes
router.get('/', async (req, res) => {
    try {
        const recipe = await Recipe.find()
        res.json(recipe)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// Modify a recipe
router.put('/:id', requiresAuth(), getRecipe, async (req, res) => {
    if (req.body.name != null){
        res.user.name = req.body.name
    }
    if (req.body.type != null){
      res.user.type = req.body.type
    }
    if (req.body.description != null){
        res.user.description = req.body.description
      }
    if (req.body.author != null){
    res.user.author = req.body.author
    }
    if (req.body.servings != null){
    res.user.servings = req.body.servings
    }
    if (req.body.ingredienets != null){
    res.user.ingredienets = req.body.ingredienets
    }
    if (req.body.directions != null){
    res.user.directions = req.body.directions
    }
    try {
        const updatedRecipe = await res.recipe.save()
        res.json(updatedRecipe)
    } catch (err){
        res.status(401).json({message: err.message})
        res.status(400).json({message: err.message})
    }
  })

//Delete A Recipe
router.delete('/:id', requiresAuth(), getRecipe, async (req, res) => {
    try {
        await res.recipe.remove()
        res.json({message: "Deleted Recipe"})
    } catch (err) {
        res.status(401).json({message: err.message})
        res.status(500).json({message: err.message})
    }
    })

async function getRecipe(req, res, next) {
    let recipe;
    try {
        recipe = await Recipe.findById(req.params.id)
        if (recipe == null) {
            return res.status(404).json({message: 'Cannot find Recipe'})
        }
    } catch (err){
        return res.status(500).json({message: err.message})
    }
    res.recipe = recipe
    next()
    }

    module.exports = router;