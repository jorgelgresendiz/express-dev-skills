var express = require('express');
var router = express.Router();
var Skill = require('../models/skill');


/* GET skills listing. */

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
});

module.exports = router;
