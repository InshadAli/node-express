const express =require('express')
const router = express.Router()
const {updateUser, deleteUser, getUser, getUsers} = require('../controller/userController')
const verifyToken = require('../utils/verifyToken')


// router.get('/', (req, res)=>{
//     res.send("This users Endpoint...");
// })

//checking authentication using jwt token
router.get('/checkauthentication', verifyToken, (req, resp, next)=>{
    resp.send("Hello User You are Logged In")
})

// UPDATE
router.put("/:id", updateUser);

// DELETE
router.delete("/:id", deleteUser);

// GET only one hotel
router.get("/:id", getUser);

// GET ALL
router.get("/", getUsers);

module.exports = router