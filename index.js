const express = require('express');
const app = express()
const mongoose = require('mongoose');
const usersRoute = require('./routers/users')
const authRoute = require('./routers/auth')
const hotelsRoute = require('./routers/hotels')
const roomsRoute = require('./routers/rooms')
const cookieParser = require('cookie-parser')

// connection with mongoDB
const connectWithDB = async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myshopee');
        console.log('connected to Database');
    } catch (error) {
        throw error
    }
}

// middlewares
app.use(express.json());
// app.use(cookieParser())
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

mongoose.connection.on('disconnected',()=>{
    console.log('Database is not connected...');
})

app.listen(5000, ()=>{
    connectWithDB();
    console.log("Connected to Backend");
})