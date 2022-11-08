const User = require('../models/User');

// here we are not making CreateUser because we already make them in out Auth.js as Register

const updateUser = async (req, resp) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        resp.status(200).json(updateUser);
    } catch (error) {
        resp.status(500).json(error);
    }
}

const deleteUser = async (req, resp) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        resp.status(200).json("Requested Id has been Deleted Successfully...");
    } catch (error) {
        resp.status(500).json(error);
    }
}

const getUser = async (req, resp) => {
    try {
        const user = await User.findById(req.params.id);
        resp.status(200).json(user);
    } catch (error) {
        resp.status(500).json(error);
    }
}

const getUsers = async (req, resp) => {
    try {
        const users = await User.find();
        resp.status(200).json(users);
    } catch (error) {
        resp.status(500).json(error);
    }
}

module.exports = {updateUser, deleteUser, getUser, getUsers}