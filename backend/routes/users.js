const express = require('express');
var router = express.Router();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./backend/database/database.json')

router.get('/ver-datos', (req, res) => {
    return res.send(req.query);
});

router.post('/registracion', (req, res) => {
/*    id
    nombre
    apellido
    username
    password
 */
    const { body: { nombre, apellido, username, password } } = req;
    if(!username || !apellido || !nombre || !password ) {
        return res.send('No se han enviado todos los datos').status(400);
    }
    const db = low(adapter); 
    const users = db.getState();
    const userExist = db.get('users').find({ username }).value();
    if(userExist && userExist.username === username) {
        return res.send('El usuario ya existe').status(500);
    }    
    const id = md5(new Date());
    db.get('users').push({ id,  nombre, apellido, username, password }).write();
    return res.send(users);            
});

router.post('/login', (req, res) => {
    return res.send(req.body);    
});

router.all('*', (req, res) => {
    return res.send({ error: 'Route not found'});
});

module.exports = router;
