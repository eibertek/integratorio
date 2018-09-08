const express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./backend/users.json')

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.get('/*', (req, res, next) => {
    console.log('a');
     next();
 });
 
 router.post('/dogs', (req, res, next) => {
 // traer un archivo con perros y recorrerlo y llenar el json
 const dogs = [
         {
             name: req.query.name,
             race: req.query.race,
             age: req.query.age,
             alive: req.query.alive
         }
     ];
   console.log(req.params, req.body);
   return res.send(dogs);  
 });
 
 router.post('/add/numbers/:number1/:number2', (req,res,next)=>{
     console.log(req.body);
    const { number1, number2 } = req.params;
    res.send({ sum: parseInt(number1) + parseInt(number2) });
 });

 router.post('/list/winners', (req,res,next)=>{
    const { body } = req;
    const db = low(adapter); 
    const users = db.getState();
    db.get('users').push(body).write();
    res.send(users);            
  //  const winner = Math.floor(Math.random() * body.length);
});

module.exports = router;