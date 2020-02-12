const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
