const  express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('template', {
    locals: {
      title: 'HomePage', 
      },
    partials: {
      partial: 'partial-index'
      }
  });
});

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


module.exports = router;
