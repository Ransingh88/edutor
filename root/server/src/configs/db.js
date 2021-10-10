const mongoose = require('mongoose');
require('dotenv').config()

// dotenv.config({ path: "../../config.env" });

// const DB = process.env.DATABASE;
const connect = () => {
    return mongoose.connect("mongodb+srv://shubham:Shubham%40007@cluster0.wktds.mongodb.net/edut?retryWrites=true&w=majority")
}




module.exports = connect;