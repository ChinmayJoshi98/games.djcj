const express = require('express');
const gameRouter = express.Router();
const {
    getAll,
    getOne,
    addOne,
    updateOne,
    delOne,
    delAll,
    getById
} = require('../controllers/gameController');

gameRouter.get('/', getAll);
gameRouter.get('/:id', getOne);
gameRouter.post('/', addOne);
gameRouter.patch('/:id', updateOne);
gameRouter.delete('/:id', delOne);
gameRouter.delete('/', delAll);
gameRouter.get('/gameById/:id', getById);

module.exports = gameRouter;