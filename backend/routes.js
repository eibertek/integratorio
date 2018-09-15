const express = require('express');
var router = express.Router();
const usersRoutes =  require('./routes/users');

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.use('/users', usersRoutes);

module.exports = router;