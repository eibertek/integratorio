const express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const usersRoutes =  require('./routes/users');

const adapter = new FileSync('./backend/database/database.json')

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.get('/*', (req, res, next) => {
    console.log('a');
     next();
 });
 /*
 router.post('/list/winners', (req,res,next)=>{
    const { body } = req;
    const db = low(adapter); 
    const users = db.getState();
    db.get('users').push(body).write();
    res.send(users);            
  //  const winner = Math.floor(Math.random() * body.length);
});
*/
router.use('/users', usersRoutes);

module.exports = router;