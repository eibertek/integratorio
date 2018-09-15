const express = require('express');
var router = express.Router();
const usersRoutes =  require('./routes/users');

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

router.use('/users', usersRoutes);

module.exports = router;