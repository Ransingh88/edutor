const mongoose = require('mongoose');
require('dotenv').config()

// dotenv.config({ path: "../../config.env" });

const DB = process.env.MONGODB_URL;
const connect = () => {
    return mongoose.connect(DB)
}




module.exports = connect;