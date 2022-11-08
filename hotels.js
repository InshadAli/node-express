const express = require("express");
const router = express.Router();
const {createHotel, updateHotel, deleteHotel, getHotel, getHotels} = require('../controller/hotelController')

// router.get('/', (req, res)=>{
//     res.send("This Hotels Endpoint...");
// })

// Create
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET only one hotel
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);

module.exports = router;
