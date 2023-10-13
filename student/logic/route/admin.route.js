const route = require('express').Router();

const { addStud, fetchAllStud, updateStud, deleteStud, findById } = require('../controller/stud.controller');

route.post('/addStud', addStud);
route.get('/getAll', fetchAllStud);
route.put('/updateStud/:id', updateStud);
route.delete('/deleteStud/:id', deleteStud);
route.get('/findId/:id', findById);

module.exports = route;