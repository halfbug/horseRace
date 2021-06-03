const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        mongoose.connection.once('open',()=>{
            console.log("connection opened to MongoDB ")
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err.message);
        // Exit proces with failure
        process.exit(1);

    }
}

module.exports = connectDB