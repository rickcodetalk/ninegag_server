var express = require('express');
var router = express.Router();

var dataService = require('../services/dataService');

/* GET home page. */
router.get('/posts/get', function(req, res, next) {

  dataService.getPosts(req.query.maxId).then(
    (data) => {
      res.send(JSON.stringify({status:'S',data:data}));
    }
  ).catch(
    (err) => res.send(JSON.stringify({status:'F'}))
  )

});

module.exports = router;
