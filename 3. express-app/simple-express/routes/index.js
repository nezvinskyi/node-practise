var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
  })
  .post('/login', (req, res, next) => {
    const { email, password } = req.body;
    res.render('response', { title: 'simple express app', email, password });
  });

router.get('/setcookie', (req, res, next) => {
  res.cookie('my_cookie', 'Hello World!');
  res.cookie('my_signed_cookie', 'Hello Universe!', { signed: true });
  res.redirect('/');
});

router.get('/clearcookie', (req, res, nex) => {
  console.log(req.cookies['my_cookie']);
  console.log(req.signedCookies['my_signed_cookie']);
  res.clearCookie('my_cookie');
  res.clearCookie('my_signed_cookie');
  res.redirect('/');
});

module.exports = router;
