const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    servings: {
        type: String
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
            unit: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    directions: [
        {
            step: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    ]
    
}, { collection : 'recipes' })

module.exports = mongoose.model('Recipe', recipeSchema);