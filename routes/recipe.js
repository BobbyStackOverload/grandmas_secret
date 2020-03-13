const  express = require('express');
const router = express.Router();
<<<<<<< HEAD
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
=======
const recipeDB = require('../models/recipeModel');
  
router.get('/:id?', async function(req, res) {
    const { id } = req.params;
    console.log(id);
    const recipe = await recipeDB.getSingleRecipe(id);
    res.render('template', {
      locals: {
        title: recipe[0].name, 
        recipe: recipe
    },
    partials: {
      partial: 'partial-single-recipe'
      }
  });
});


module.exports = router;
>>>>>>> 150111a3dfacc5611e98e399fb4b4c8c8de747ae
