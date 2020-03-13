const  express = require('express');
const router = express.Router();
const RecipeModel = require('../models/recipeModel');
/* GET home page. */
router.get('/',  function(req, res, next) {
    const recipe = RecipeModel.getAllRecipes();
    
    res.render('template', {
      locals: {
        title: 'recipes',
        recipe: recipe  
        },
      partials: {
        partial: 'partial-singlerec'
        }
    });
  });

router.get('/:id?', async function(req, res, next) {
    const { id } = req.params;
    const recipe = await RecipeModel.getRecipeById(id);
    res.render('template', {
    locals: {
      title: recipe[0].name,
      recipe: recipe
      },
    partials: {
      partial: 'partial-singlerec'
      }
  });
});
module.exports = router;
