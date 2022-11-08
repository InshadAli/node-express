const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {jwt_secret_key} = require('../utils/secret')

const register = async (req, resp) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        await newUser.save()
        resp.status(200).send('New User has been Created Successfully...')
    } catch (error) {
        throw error
    }
}
const login = async (req, resp) =>{
    try {
        const user = await User.findOne({username:req.body.username})
        if(!user){
            resp.status(404).send('User Not Found')
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect){
            resp.status(400).send('wrong password')
        }
        // making jwt token
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, jwt_secret_key)

        const {isAdmin, password, ...otherDetails} = user._doc
        // making Cookie in response
        resp.cookie('access_key', token, {httpOnly:true}).status(200).json(otherDetails)
    } catch (error) {
        throw error
    }
}




module.exports = {register, login}