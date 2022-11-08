const Hotel = require("../models/Hotel");

const createHotel = async (req, resp) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        resp.status(200).json(savedHotel);
    } catch (error) {
        resp.status(500).json(error);
    }
}

const updateHotel = async (req, resp) => {
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        resp.status(200).json(updateHotel);
    } catch (error) {
        resp.status(500).json(error);
    }
}

const deleteHotel = async (req, resp) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        resp.status(200).json("Requested Id has been Deleted Successfully...");
    } catch (error) {
        resp.status(500).json(error);
    }
}

const getHotel = async (req, resp) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        resp.status(200).json(hotel);
    } catch (error) {
        resp.status(500).json(error);
    }
}

const getHotels = async (req, resp) => {
    try {
        const hotels = await Hotel.find();
        resp.status(200).json(hotels);
    } catch (error) {
        resp.status(500).json(error);
    }
}

module.exports = {createHotel, updateHotel, deleteHotel, getHotel, getHotels}