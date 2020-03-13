const  express = require('express');
const router = express.Router();
const recipeDB = require('../models/recipeModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const recipes = await recipeDB.getAllRecipes();
  res.render('template', {
    locals: {
      title: "Grandma's Secret",
      recipes: recipes 
      },
    partials: {
      partial: 'partial-index'
      }
  });
});

<<<<<<< HEAD
router.get('/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'Recipe', 
      },
    partials: {
      partial: 'partial-singlerec'
      }
  });
});

router.get('/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'Recipe Category', 
      },
    partials: {
      partial: 'partial-recbycat'
      }
  });
});


=======
>>>>>>> 150111a3dfacc5611e98e399fb4b4c8c8de747ae
module.exports = router;
