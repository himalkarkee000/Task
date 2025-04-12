require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:process.env.MONGO_DB_NAME
}).then(()=>{
    console.log("Mongo Db connected successfully")
}).catch((err)=>{
    console.log("Error while connecting MongoDb")
    process.exit(1)
})