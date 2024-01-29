const userModel = require('../models/userModel');
const mongoose = require('mongoose');

const getAll = async (req, res) => {
    try{
        let user = await userModel.find({}).sort({createdAt: -1});
        res.status(200).json(user);
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
            let user = await userModel.findById(id);
            if(!user){
                console.log("No such user exists");
                return res.status(404).json('User not found');
            }
            res.status(200).json(user);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the ID in the correct format");
    }
}

const addOne = async (req, res) => {
    try{
        const { userID, email, age } = req.body;
        let user = await userModel.create({userID, email, age});
        res.status(200).json(user);
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
            let user = await userModel.findOneAndUpdate({_id: id},{...req.body},{new: true});
            if(!user){
                console.log("No such user exists");
                return res.status(404).json('User not found');
            }
            res.status(200).json(user);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the ID in the correct format");
    }
}

const delOne = async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
        try{
            let user = await userModel.findOneAndDelete({_id: id});
            if(!user){
                console.log("No such user exists");
                return res.status(404).json('User not found');
            }
            res.status(200).json(user);
        }
        catch(err){
            console.log(err);
            res.status(500).json(err.message);
        }
    }
    else{
        console.log("Invalid ID format");
        res.status(500).json("Please enter the ID in the correct format");
    }
}

const delAll = async (req, res) => {
    try{
        let user = await userModel.deleteMany()
        res.status(200).json(user);
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({"Error": err.message});
    }
}

module.exports = { getAll, getOne, addOne, delAll, delOne, updateOne };