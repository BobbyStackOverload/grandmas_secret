const  express = require('express');
const router = express.Router();
const recipeDB = require('../models/recipeModel');
const ingredientDB = require('../models/ingredientModel');
const multer = require('multer');
const upload = multer({dest: __dirname + '/public/images'});
const path = require('path');


console.log(__dirname);
router.get('/', async function(req, res, next) {
  const recipes = await recipeDB.getAllRecipes();
  const ingredients = await ingredientDB.getAllIngredient();
  const categories = await recipeDB.getUniqueCategories();
  
  
  res.render('template', {
    locals: {
      title: "Grandma's Secret",
      recipes: recipes,
      ingredients: ingredients,
      categories: categories
      },
    partials: {
      partial: 'partial-index'
      }
  });
});

router.post("/", upload.single('photo'), async function(req, res, next) {
  const { name, category, ingredientName, ingredientAmount, ingredientMeasurement, instructions  } = req.body;
  const ingredientIdArray = [];
  const ingredientAmountArray = [];
  console.log(typeof ingredientMeasurement);
  if(typeof ingredientMeasurement === 'object') {
    ingredientAmount.forEach(element => {
      ingredientAmountArray.push(parseInt(element));
    });
    console.log(ingredientAmountArray);

    ingredientName.forEach(element => {
      ingredientIdArray.push(parseInt(element));
    });

    const recipe = new recipeDB(null, name, category, ingredientIdArray, ingredientAmountArray, ingredientMeasurement, instructions);
    recipe.addRecipe();
  } else {

    const recipe = new recipeDB(null, name, category, ingredientId, ingredientAmount, ingredientMeasurement, instructions);
    recipe.addRecipe();
  }

  
  
  if(req.file) {
    res.json(req.file);
  }
  else throw 'error';



});

module.exports = router;