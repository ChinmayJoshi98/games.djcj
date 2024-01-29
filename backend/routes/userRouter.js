const express = require('express');
const userRouter = express.Router();
const {
    getAll,
    getOne,
    addOne,
    updateOne,
    delOne,
    delAll
} = require('../controllers/userController');

userRouter.get('/', getAll);
userRouter.get('/:id', getOne);
userRouter.post('/', addOne);
userRouter.patch('/:id', updateOne);
userRouter.delete('/:id', delOne);
userRouter.delete('/', delAll);

module.exports = userRouter;