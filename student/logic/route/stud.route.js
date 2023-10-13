const route = require('express').Router();

const { getStud } = require('../controller/stud.controller');

route.get('/:email/:id', getStud);

module.exports = route;