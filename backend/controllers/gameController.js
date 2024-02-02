const gameModel = require('../models/gameModel');
const mongoose = require('mongoose');
const userModel = require('../models/userModel');

const getAll = async (req, res) => {
    try{
        let game = await gameModel.find({}).sort({createdAt: -1});
        res.status(200).json(game);
    }
    catch(err){
        console.log(err.message);
        res.status(404).json({"Error": err.message});
    }
}

const getOne = async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        try{
            let game = await gameModel.findById(id);
            if(!game){
                console.log("No such game exists");
                return res.status(404).json('Game not found');
            }
            res.status(200).json(game);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the Game ID in the correct format");
    }
}

const addOne = async (req, res) => {
    try{
        const { gameID, name, price, ownerID } = req.body;
        let ownerExists = await userModel.exists({userID: ownerID});
        if(ownerExists){
            let game = await gameModel.create({ gameID, name, price, ownerID });
            res.status(200).json(game);
        }
        else{
            console.log("The entered owner ID is incorrect");
            res.status(500).json("Please enter a valid owner ID. No user with the entered ID exists.");
        }
        
    }
    catch(err){
        console.log(err);
        res.status(500).json(err.message);
    }
}

const updateOne = async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        try{
            let game = await gameModel.findOneAndUpdate({_id: id},{...req.body},{new: true});
            if(!game){
                console.log("No such game exists");
                return res.status(404).json('Game not found');
            }
            res.status(200).json(game);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the Game ID in the correct format");
    }
}

const delOne = async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        try{
            let game = await gameModel.findOneAndDelete({_id: id});
            if(!game){
                console.log("No such game exists");
                return res.status(404).json('Game not found');
            }
            res.status(200).json(game);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the Game ID in the correct format");
    }
}

const delAll = async (req, res) => {
    try{
        let game = await gameModel.deleteMany()
        res.status(200).json(game);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({"Error": err.message});
    }
}
const getById = async (req, res) => {
    const { id } = req.params;
    let ownerExists = await userModel.exists({userID: id});
    if(ownerExists){
        try{
            let game = await gameModel.find({ownerID: id}).sort({createdAt: -1});
            if(game.length === 0){
                console.log("No games owned by this owner");
                return res.status(404).json('');
            }   
            res.status(200).json(game);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("No owner with this ID");
        res.status(404).json("No user with the given ID exists.")
    }  
}

const delById = async (req, res) => {
    const { id } = req.params;
    let ownerExists = await userModel.exists({userID: id});
    if(ownerExists){
        try{
            let game = await gameModel.deleteMany({ownerID: id});
            if(game.length === 0){
                console.log("No games owned by this owner");
                return res.status(404).json('');
            }   
            res.status(200).json(game);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("No owner with this ID");
        res.status(404).json("No user with the given ID exists.")
    }  
}

module.exports = { getAll, getOne, addOne, delAll, delOne, updateOne, getById, delById };